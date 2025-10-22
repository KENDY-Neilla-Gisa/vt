"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { EmiratesCarousel } from "./emirates-carousel"
import { Comments } from "./comments"
import type React from "react"

interface DetailPanelProps {
  topic: {
    id: string
    title: string
    image: string
    description: string | React.ReactNode
    facts: Array<{
      text: string | React.ReactNode
      publishDate: string
    }>
    didYouKnow?: {
      text: string | React.ReactNode
      image?: string
    }
    terminology?: {
      text: string | React.ReactNode
    }
    category: string | string[]
    readTime: string
    publishDate: string
    carouselImages?: string[]
    carouselLabels?: string[]
  } | null
}

export default function DetailPanel({ topic }: DetailPanelProps) {
  if (!topic) {
    return (
      <div className="h-full flex items-center justify-center text-muted-foreground px-6 py-12 sm:px-6 sm:py-12 md:px-0 md:py-0">
        <div className="text-center max-w-md">
          <h3 className="text-lg font-medium mb-2">Select a topic</h3>
          <p className="text-sm">Choose a topic from the series to explore fascinating facts</p>
        </div>
      </div>
    )
  }

  return (
    <ScrollArea className="h-full">
      <div className="p-4 sm:p-6 space-y-6">
        <EmiratesCarousel category={topic.category} readTime={topic.readTime} images={topic.carouselImages} labels={topic.carouselLabels} />

        <div>
          <h1 className="text-xl sm:text-2xl font-bold mb-3 text-balance">{topic.title}</h1>
          <div className="text-muted-foreground leading-relaxed text-pretty">{topic.description}</div>
          <p className="text-xs text-muted-foreground mt-2">Published: {topic.publishDate}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Fascinating Facts</h2>
          <div className="space-y-4">
            {topic.facts.map((fact, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <div className="text-sm leading-relaxed text-pretty">{fact.text}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {topic.didYouKnow && (
          <div>
            {topic.id !== "hypnic-jerk" && <h2 className="text-lg font-semibold mb-4">Did You Know?</h2>}
            {topic.didYouKnow.image && (
              <div className="mb-4">
                <img
                  src={topic.didYouKnow.image || "/placeholder.svg"}
                  alt="Instagram post screenshot"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
            )}
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-4">
                <div className="text-sm leading-relaxed text-pretty">{topic.didYouKnow.text}</div>
              </CardContent>
            </Card>
          </div>
        )}

        {topic.terminology && (
          <div>
            <Card className="border-l-4 border-l-muted-foreground">
              <CardContent className="p-4">
                <div className="text-sm leading-relaxed text-pretty">{topic.terminology.text}</div>
              </CardContent>
            </Card>
          </div>
        )}

        <Card className="bg-muted">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground text-pretty">
              This topic was curated by our research team to bring you the most interesting and verified facts from
              around the world. Check back frequently for new topics!
            </p>
            <p className="text-xs text-muted-foreground mt-3">Editor-In-Chief: Kendy Gisa</p>
          </CardContent>
        </Card>

        <div>
          <Comments articleSlug={topic.id} />
        </div>
      </div>
    </ScrollArea>
  )
}

 

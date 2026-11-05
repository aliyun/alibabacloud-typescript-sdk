import * as $dara from '@darabonba/typescript';
export declare class ContentPlanTopic extends $dara.Model {
    /**
     * @remarks
     * The article generation session ID.
     *
     * @example
     * conv_8a2b3c
     */
    articleConversationId?: string;
    /**
     * @remarks
     * The generated article ID.
     *
     * @example
     * art_9f2k3d
     */
    articleId?: string;
    /**
     * @remarks
     * The status of the associated article. Valid values: DRAFT, PUBLISHED, and PUBLISH_FAILED. This parameter is empty if the article is not generated.
     *
     * @example
     * PUBLISHED
     */
    articleStatus?: string;
    /**
     * @remarks
     * The GEO diagnostic item references.
     */
    diagnosisReferences?: string[];
    /**
     * @remarks
     * The content direction.
     *
     * @example
     * Introduction to product capabilities
     */
    direction?: string;
    /**
     * @remarks
     * The reason for the execution failure.
     *
     * @example
     * Article generation failed. Try again later
     */
    failReason?: string;
    /**
     * @remarks
     * The content plan ID.
     *
     * @example
     * plan_3f7a1c2e9b7d4a5f8c0e1d2b3a4c5d6e
     */
    planId?: string;
    /**
     * @remarks
     * The workspace ID. This refers to the GEO workspace for brand marketing, which is the appWorkspaceId.
     *
     * @example
     * d4e5f60718293a4b5c6d7e8f90a1b2c3
     */
    projectId?: string;
    /**
     * @remarks
     * The rationale for topic selection.
     *
     * @example
     * Users show high interest in AI website builder capabilities, making it a suitable entry point for brand awareness
     */
    rationale?: string;
    /**
     * @remarks
     * The recommended publishing channels.
     */
    recommendedChannels?: string[];
    /**
     * @remarks
     * The scheduled publish date in the yyyy-MM-dd format.
     *
     * @example
     * 2026-10-12
     */
    scheduledAt?: string;
    /**
     * @remarks
     * The reason for skipping.
     *
     * @example
     * This topic duplicates a published article and has been skipped
     */
    skipReason?: string;
    /**
     * @remarks
     * The topic status.
     *
     * @example
     * PENDING
     */
    status?: string;
    /**
     * @remarks
     * The content title.
     *
     * @example
     * Analysis of the core capabilities of Wanxiaozhi AI website builder
     */
    title?: string;
    /**
     * @remarks
     * The topic ID.
     *
     * @example
     * topic_3f7a1c2e9b7d4a5f8c0e1d2b3a4c5d6e
     */
    topicId?: string;
    /**
     * @remarks
     * The writing direction, which only describes the structure and perspective.
     *
     * @example
     * First summarize the product positioning, then introduce the core capabilities point by point, and finally provide the applicable scenarios
     */
    writingDirection?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}

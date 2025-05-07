// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaListArticle } from "./RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaListArticle";


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaList extends $dara.Model {
  article?: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaListArticle;
  /**
   * @example
   * xx
   */
  fileUrl?: string;
  /**
   * @example
   * xx
   */
  mediaId?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      article: 'Article',
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      article: RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentTimelineResultTextGenerateMultimodalMediaListMultimodalMediaListArticle,
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    if(this.article && typeof (this.article as any).validate === 'function') {
      (this.article as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


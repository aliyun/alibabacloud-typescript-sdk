// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextGeneratedContentClusterTopicResultClusterTopicsTextSearchResultSearchResultMultimodalMedias extends $dara.Model {
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
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


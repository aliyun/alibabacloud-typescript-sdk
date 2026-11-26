// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchKnowledgeBaseShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The search text and the search configuration overrides for the current request. If the mode, count, fusion, and reranking parameters are omitted, the knowledge base configuration is used. If the knowledge base is not configured, the system default values specified in each field description are used. If metadataFilter is omitted, no metadata filtering is applied.
   * 
   * This parameter is required.
   */
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


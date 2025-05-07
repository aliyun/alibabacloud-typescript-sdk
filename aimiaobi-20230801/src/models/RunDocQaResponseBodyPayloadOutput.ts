// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunDocQaResponseBodyPayloadOutputMediaUrlList } from "./RunDocQaResponseBodyPayloadOutputMediaUrlList";
import { RunDocQaResponseBodyPayloadOutputRecommends } from "./RunDocQaResponseBodyPayloadOutputRecommends";
import { RunDocQaResponseBodyPayloadOutputReferences } from "./RunDocQaResponseBodyPayloadOutputReferences";


export class RunDocQaResponseBodyPayloadOutput extends $dara.Model {
  content?: string;
  interveneContent?: string;
  /**
   * @example
   * false
   */
  isReject?: boolean;
  mediaUrlList?: RunDocQaResponseBodyPayloadOutputMediaUrlList[];
  recommends?: RunDocQaResponseBodyPayloadOutputRecommends[];
  references?: RunDocQaResponseBodyPayloadOutputReferences[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      interveneContent: 'InterveneContent',
      isReject: 'IsReject',
      mediaUrlList: 'MediaUrlList',
      recommends: 'Recommends',
      references: 'References',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      interveneContent: 'string',
      isReject: 'boolean',
      mediaUrlList: { 'type': 'array', 'itemType': RunDocQaResponseBodyPayloadOutputMediaUrlList },
      recommends: { 'type': 'array', 'itemType': RunDocQaResponseBodyPayloadOutputRecommends },
      references: { 'type': 'array', 'itemType': RunDocQaResponseBodyPayloadOutputReferences },
    };
  }

  validate() {
    if(Array.isArray(this.mediaUrlList)) {
      $dara.Model.validateArray(this.mediaUrlList);
    }
    if(Array.isArray(this.recommends)) {
      $dara.Model.validateArray(this.recommends);
    }
    if(Array.isArray(this.references)) {
      $dara.Model.validateArray(this.references);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


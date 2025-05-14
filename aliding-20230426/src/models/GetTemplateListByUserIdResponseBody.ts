// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTemplateListByUserIdResponseBodyTemplateList } from "./GetTemplateListByUserIdResponseBodyTemplateList";


export class GetTemplateListByUserIdResponseBody extends $dara.Model {
  /**
   * @example
   * 12312131231
   */
  nextCursor?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  templateList?: GetTemplateListByUserIdResponseBodyTemplateList[];
  static names(): { [key: string]: string } {
    return {
      nextCursor: 'nextCursor',
      requestId: 'requestId',
      templateList: 'templateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextCursor: 'number',
      requestId: 'string',
      templateList: { 'type': 'array', 'itemType': GetTemplateListByUserIdResponseBodyTemplateList },
    };
  }

  validate() {
    if(Array.isArray(this.templateList)) {
      $dara.Model.validateArray(this.templateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


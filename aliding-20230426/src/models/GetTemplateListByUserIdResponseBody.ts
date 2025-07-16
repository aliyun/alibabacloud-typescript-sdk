// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateListByUserIdResponseBodyTemplateList extends $dara.Model {
  iconUrl?: string;
  name?: string;
  /**
   * @example
   * 11111
   */
  reportCode?: string;
  /**
   * @example
   * https://scsss/sss
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      iconUrl: 'IconUrl',
      name: 'Name',
      reportCode: 'ReportCode',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iconUrl: 'string',
      name: 'string',
      reportCode: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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


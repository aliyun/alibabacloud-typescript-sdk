// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateReportResponseBodyData extends $dara.Model {
  actionNames?: string[];
  /**
   * @example
   * PDF
   */
  type?: string;
  /**
   * @example
   * http://viapi-customer-pop.oss-cn-shanghai.aliyuncs.com/cefe_295855287226852864_23eebf3799c7442a992d2e56fde87616
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      actionNames: 'ActionNames',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionNames: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionNames)) {
      $dara.Model.validateArray(this.actionNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


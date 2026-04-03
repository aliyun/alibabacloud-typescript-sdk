// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FunagentVersionItem extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * 多条更新说明
   */
  publishContent?: string[];
  /**
   * @remarks
   * 日期或 ISO 8601 字符串
   */
  publishTime?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      publishContent: 'publishContent',
      publishTime: 'publishTime',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      publishContent: { 'type': 'array', 'itemType': 'string' },
      publishTime: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.publishContent)) {
      $dara.Model.validateArray(this.publishContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


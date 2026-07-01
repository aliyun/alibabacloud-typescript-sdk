// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRCSTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


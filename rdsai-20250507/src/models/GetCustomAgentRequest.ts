// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomAgentRequest extends $dara.Model {
  /**
   * @example
   * app-iBuGU1VxEY42zrQRQfNAn3oj
   */
  apiId?: string;
  /**
   * @example
   * ebe44453-3b41-4c74-94d1-01d088d7xxxx
   */
  customAgentId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      customAgentId: 'CustomAgentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      customAgentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


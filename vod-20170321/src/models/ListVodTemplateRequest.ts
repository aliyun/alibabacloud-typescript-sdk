// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVodTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Set the value to **app-1000000**. For more information, see [Overview](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The type of the template. Set the value to **Snapshot**.
   * 
   * This parameter is required.
   * 
   * @example
   * Snapshot
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


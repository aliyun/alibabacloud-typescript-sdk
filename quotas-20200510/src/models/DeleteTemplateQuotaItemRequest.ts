// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTemplateQuotaItemRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the quota template. For more information about how to obtain the quota template ID, see [ListQuotaApplicationTemplates](https://help.aliyun.com/document_detail/450403.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


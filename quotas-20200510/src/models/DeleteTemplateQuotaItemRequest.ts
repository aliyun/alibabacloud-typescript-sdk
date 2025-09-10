// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTemplateQuotaItemRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the quota template.
   * 
   * You can call the [ListQuotaApplicationTemplates](https://help.aliyun.com/document_detail/450403.html) operation to obtain the ID of a quota template.
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


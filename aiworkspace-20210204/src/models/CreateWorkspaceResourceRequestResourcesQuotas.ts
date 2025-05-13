// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceResourceRequestResourcesQuotas extends $dara.Model {
  /**
   * @remarks
   * The quota ID. You can call [ListQuotas](https://help.aliyun.com/document_detail/449144.html) to obtain the quota ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 232892******92912
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


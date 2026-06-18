// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomHostnameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom hostname. To obtain this ID, call the [ListCustomHostnames](https://help.aliyun.com/document_detail/3018667.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  hostnameId?: number;
  static names(): { [key: string]: string } {
    return {
      hostnameId: 'HostnameId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostnameId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


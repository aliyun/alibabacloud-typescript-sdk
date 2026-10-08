// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the contact templates to delete. Separate multiple values with commas (,).
   * 
   * The system automatically generates an ID upon successful creation of a contact template. You can invoke the [QueryRegistrantProfiles](https://help.aliyun.com/document_detail/67701.html) API to query the template IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 123,45,67
   */
  registrantProfileIds?: string;
  /**
   * @remarks
   * User IP address. You can set this parameter to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      registrantProfileIds: 'RegistrantProfileIds',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrantProfileIds: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


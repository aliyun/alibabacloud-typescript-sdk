// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the bastion host. You can specify up to 20 tags for the bastion host.
   * 
   * > - Thekey cannot be an empty string. The key can be up to 128 characters in length. 
   * > - It cannot start with **aliyun** or **acs:**, and cannot contain **http://** or **https://**.
   * 
   * @example
   * operation
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the bastion host.\\
   * You can specify up to 20 tags for the bastion host.
   * 
   * > *   The value can be a string of up to 128 characters or an empty string.
   * > *   It cannot start with **aliyun** or **acs:**, and cannot contain **http://** or **https://**.
   * 
   * @example
   * operation_test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


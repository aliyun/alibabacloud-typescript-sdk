// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDatabaseAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The password of the administrator account for the database.
   * 
   * This parameter is required.
   * 
   * @example
   * Password****
   */
  accountPassword?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and you must ensure that the value is unique among different requests. The client token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID of the simple application server database.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The region ID of the simple application server database instance. You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the supported Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accountPassword: 'AccountPassword',
      clientToken: 'ClientToken',
      databaseInstanceId: 'DatabaseInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPassword: 'string',
      clientToken: 'string',
      databaseInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


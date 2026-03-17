// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAccessGatewayAdminPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query only the SAG instances that belong to another Alibaba Cloud account. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * false
   */
  crossAccount?: boolean;
  /**
   * @remarks
   * The new password used to log on to the SAG device.
   * 
   * The password must be 8 to 30 characters in length and can contain letters, digits, and underscores (_).
   * 
   * > In the example, asterisks (\\*) are used to conceal the real password. This does not mean that the password supports asterisks (\\*). The actual format requirement prevails.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234****
   */
  password?: string;
  /**
   * @remarks
   * The region ID of the SAG instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the SAG instance belongs.
   * 
   * @example
   * 147304382796****
   */
  resourceUid?: string;
  /**
   * @remarks
   * The ID of the Smart Access Gateway (SAG) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-sv487b7lno6go5****
   */
  sagInsId?: string;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sagf4ea****
   */
  sagSn?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      password: 'Password',
      regionId: 'RegionId',
      resourceUid: 'ResourceUid',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      password: 'string',
      regionId: 'string',
      resourceUid: 'string',
      sagInsId: 'string',
      sagSn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAccessGatewayAdminPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query only Smart Access Gateway instances that belong to other Alibaba Cloud accounts. Valid values:
   * 
   * - **false** (default): no.
   * 
   * - **true**: yes.
   * 
   * @example
   * false
   */
  crossAccount?: boolean;
  /**
   * @remarks
   * The new logon password for the Smart Access Gateway device.
   * 
   * Password format requirements: The password must be 8 to 30 characters in length and can contain uppercase letters, lowercase letters, digits, and underscores (_).
   * 
   * > Asterisks (*) are used in the sample value to mask the actual password. This does not mean that asterisks are supported in passwords. Specify the password based on the format requirements.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234****
   */
  password?: string;
  /**
   * @remarks
   * The ID of the region where the Smart Access Gateway instance resides.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the Smart Access Gateway instance belongs.
   * 
   * @example
   * 147304382796****
   */
  resourceUid?: string;
  /**
   * @remarks
   * The Smart Access Gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-sv487b7lno6go5****
   */
  sagInsId?: string;
  /**
   * @remarks
   * The serial number of the Smart Access Gateway device.
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


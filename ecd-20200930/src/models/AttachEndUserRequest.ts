// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachEndUserRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the Active Directory (AD) office network.
   * 
   * @example
   * xn--0zw****
   */
  adDomain?: string;
  /**
   * @remarks
   * The type of the client.
   * 
   * Valid values:
   * 
   * *   1: hardware client.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  clientType?: number;
  /**
   * @remarks
   * The serial number (SN) of the hardware client.
   * 
   * This parameter is required.
   * 
   * @example
   * 111810122200F0C24CF7F1BF-*05AY****
   */
  deviceId?: string;
  /**
   * @remarks
   * The ID of the convenient office network.
   * 
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the user that you want to bind to the hardware client.
   * 
   * This parameter is required.
   * 
   * @example
   * moli
   */
  endUserId?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by WUYING Workspace.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The account type of the user.
   * 
   * Valid values:
   * 
   * *   AD: enterprise AD account.
   * *   SIMPLE: convenience account
   * 
   * @example
   * SIMPLE
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      adDomain: 'AdDomain',
      clientType: 'ClientType',
      deviceId: 'DeviceId',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      regionId: 'RegionId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      clientType: 'number',
      deviceId: 'string',
      directoryId: 'string',
      endUserId: 'string',
      regionId: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


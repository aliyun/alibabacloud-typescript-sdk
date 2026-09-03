// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachEndUserRequest extends $dara.Model {
  /**
   * @remarks
   * The address of the AD workspace.
   * 
   * @example
   * xn--0zw****
   */
  adDomain?: string;
  /**
   * @remarks
   * The device type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  clientType?: number;
  /**
   * @remarks
   * The serial number (SN) of the WUYING hardware terminal.
   * 
   * This parameter is required.
   * 
   * @example
   * 12OERSLDO7M3****
   */
  deviceId?: string;
  /**
   * @remarks
   * The ID of the convenience workspace.
   * 
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the bound user to add to the WUYING hardware terminal.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by WUYING Workspace.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user account type.
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


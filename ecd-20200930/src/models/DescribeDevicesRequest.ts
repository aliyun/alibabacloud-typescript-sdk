// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDevicesRequest extends $dara.Model {
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
   * *   2: software client.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  clientType?: string;
  /**
   * @remarks
   * The ID of the device. The serial number (SN) of the hardware client or the UUID of the software client.
   * 
   * @example
   * 5F52817BE267A43C608D245070D2****
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
   * The ID of the bound user.
   * 
   * @example
   * moli
   */
  endUserId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by WUYING Workspace.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
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
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adDomain: 'string',
      clientType: 'string',
      deviceId: 'string',
      directoryId: 'string',
      endUserId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
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


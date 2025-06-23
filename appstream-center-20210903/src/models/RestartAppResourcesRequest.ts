// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartAppResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-53fvrq1oanz6c****
   */
  appInstanceGroupId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eac19bef-1e45-4190-a03a-4ea74b699ca7
   */
  clientId?: string;
  /**
   * @example
   * 1.2.3.4
   */
  clientIp?: string;
  /**
   * @example
   * windows_\\"Windows 10 Enterprise\\" 10.0 (Build 14393)
   */
  clientOS?: string;
  /**
   * @example
   * 7.5.3-RS-20241127.131156
   */
  clientVersion?: string;
  /**
   * @example
   * user001
   */
  endUserId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1124500957832f30b3e716406562071655aa43b2a723ed2be0837815483d54e025db13ba5469f06f2410d0efc4d302e36
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AndroidCloud
   */
  productType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c261a6a1-e242-4f4b-813c-5fe807e49f03
   */
  sessionId?: string;
  /**
   * @example
   * 2943802884B27030B6759F9132B2****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientVersion: 'ClientVersion',
      endUserId: 'EndUserId',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      productType: 'ProductType',
      resourceIds: 'ResourceIds',
      sessionId: 'SessionId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      bizRegionId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientVersion: 'string',
      endUserId: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      productType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAppResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
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
   * windows_"Windows 10 Enterprise" 10.0 (Build 19042)
   */
  clientOS?: string;
  /**
   * @example
   * 7.2.0-R-20241008.110000
   */
  clientVersion?: string;
  /**
   * @example
   * testUser
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
   * v12369636c721ba6b3ddb1683341016775c3f63e4d0e78f120f9a0544ed826b7af7daf747c402f0d0730b52f451b70****
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
   * 597e869d-ea14-4b83-9490-714f68bfe935
   */
  sessionId?: string;
  /**
   * @example
   * C50973691A6D2BE23F2CDD73B85B****
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


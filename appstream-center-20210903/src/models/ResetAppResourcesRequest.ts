// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAppResourcesRequest extends $dara.Model {
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
   * f4a0dc8e-1702-4728-9a60-95b27a35****
   */
  clientId?: string;
  /**
   * @example
   * 1.2.3.4
   */
  clientIp?: string;
  /**
   * @example
   * windows_\\"Windows 10 Pro\\" 10.0 (Build 22631)
   */
  clientOS?: string;
  /**
   * @example
   * 7.7.0-R-20241217.092056
   */
  clientVersion?: string;
  /**
   * @example
   * user01
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
   * v285fdd7f6d39fa7861981639366085772e150a390a5bb7b43c4e62440d94fc392b945770e1596cebe90085ce0af4d****
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


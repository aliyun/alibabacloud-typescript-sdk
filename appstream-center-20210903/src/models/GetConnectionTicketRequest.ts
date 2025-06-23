// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionTicketRequest extends $dara.Model {
  /**
   * @example
   * INTERNET
   * 
   * **if can be null:**
   * true
   */
  accessType?: string;
  /**
   * @example
   * ca-etn4zizgaezo9gis9
   */
  appId?: string;
  /**
   * @example
   * aig-bw1o1gcwvd3e1ipeu
   */
  appInstanceGroupId?: string;
  appInstanceId?: string;
  appPolicyId?: string;
  /**
   * @example
   * 1.0.0.1
   */
  appVersion?: string;
  autoConnectInQueue?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * f2463208-ec89-4309-8e8c-8b17acdcab93
   */
  clientId?: string;
  /**
   * @example
   * 22.21.2.21
   */
  clientIp?: string;
  /**
   * @example
   * windows_"Windows 10 Enterprise LTSC 2019" 10.0 (Build 17763)
   */
  clientOS?: string;
  clientType?: string;
  /**
   * @example
   * 2.0.1-D-20211008.101607
   */
  clientVersion?: string;
  connectionProperties?: string;
  /**
   * @example
   * test.test
   */
  endUserId?: string;
  environmentConfig?: string;
  /**
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @example
   * v1c4e2ef03d620f0f6cb41634196161219054e12d8aa5a13deb9ed14eebb76d674559115ad2e27a57f6820c1fd33e0ca36
   */
  loginToken?: string;
  /**
   * @example
   * /home/test/test.jpg
   */
  param?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  resourceId?: string;
  /**
   * @example
   * 09e2b2e6-3181-4c84-9539-6fc9f1c3199e
   */
  sessionId?: string;
  /**
   * @example
   * 6f41731b-7091-4954-80c8-1d1e0b3ebb48
   */
  taskId?: string;
  /**
   * @example
   * 1126819517152528
   */
  tenantId?: string;
  /**
   * @example
   * A8B35215993FBF283F28D617975204C4
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceId: 'AppInstanceId',
      appPolicyId: 'AppPolicyId',
      appVersion: 'AppVersion',
      autoConnectInQueue: 'AutoConnectInQueue',
      bizRegionId: 'BizRegionId',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
      clientOS: 'ClientOS',
      clientType: 'ClientType',
      clientVersion: 'ClientVersion',
      connectionProperties: 'ConnectionProperties',
      endUserId: 'EndUserId',
      environmentConfig: 'EnvironmentConfig',
      loginRegionId: 'LoginRegionId',
      loginToken: 'LoginToken',
      param: 'Param',
      productType: 'ProductType',
      resourceId: 'ResourceId',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      tenantId: 'TenantId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceId: 'string',
      appPolicyId: 'string',
      appVersion: 'string',
      autoConnectInQueue: 'boolean',
      bizRegionId: 'string',
      clientId: 'string',
      clientIp: 'string',
      clientOS: 'string',
      clientType: 'string',
      clientVersion: 'string',
      connectionProperties: 'string',
      endUserId: 'string',
      environmentConfig: 'string',
      loginRegionId: 'string',
      loginToken: 'string',
      param: 'string',
      productType: 'string',
      resourceId: 'string',
      sessionId: 'string',
      taskId: 'string',
      tenantId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


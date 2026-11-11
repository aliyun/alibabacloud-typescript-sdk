// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The access type. If this parameter is not passed, both types are displayed. Valid values: INTERNET (Internet) and VPC (Express Connect circuit).
   * 
   * @example
   * INTERNET
   * 
   * **if can be null:**
   * true
   */
  accessType?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * > Required for the first call, and optional for subsequent calls.
   * 
   * @example
   * ca-etn4zizga******
   */
  appId?: string;
  /**
   * @remarks
   * The delivery group ID.
   * > 
   * > - When this parameter is passed, an application instance is assigned only from the specified and authorized delivery groups.
   * > - When the AppInstanceId parameter is passed, this parameter is required.
   * 
   * @example
   * aig-bw1o1gcwv******
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The application instance ID.
   * 
   * > 
   * > - When this parameter is passed, the system only attempts to assign the specified application instance.
   * > - When this parameter is passed, the AppInstanceGroupId parameter must also be passed.
   * 
   * @example
   * ai-ij4a6kd4bn2******
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-0clfzcy0adpcf****
   */
  appPolicyId?: string;
  /**
   * @remarks
   * The application version number.
   * 
   * @example
   * 1.0.1
   */
  appVersion?: string;
  /**
   * @remarks
   * Specifies whether to automatically connect when the turn is reached.
   * 
   * > This parameter is not available.
   * 
   * @example
   * true
   */
  autoConnectInQueue?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * > When this parameter is passed, an application instance is assigned only from the delivery groups in the specified region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * f2463208-ec89-4309-8e8c-8b1******
   */
  clientId?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 22.21.*.*
   */
  clientIp?: string;
  /**
   * @remarks
   * The client operating system.
   * 
   * @example
   * windows_"Windows 10 Enterprise LTSC 2019" 10.0 (Build 17763)
   */
  clientOS?: string;
  /**
   * @remarks
   * The client type.
   * 
   * @example
   * html5
   */
  clientType?: string;
  /**
   * @remarks
   * The client version.
   * 
   * @example
   * 2.0.1-D-20211008.101607
   */
  clientVersion?: string;
  /**
   * @remarks
   * The connection properties in JSON format.
   * The following parameters are supported:
   * 
   * - authMode: the authorization mode, which is determined based on the authorization mode of the delivery group. Valid values: App (application authorization), AppInstanceGroup (delivery group authorization), and Session (persistent session authorization).
   * - appInstanceGroupScheduleTags: the delivery group scheduling tags. Multiple tag key-value pairs are supported for filtering. Multiple tag pairs have an AND relationship. The key must have a value, and the value can be empty. Format example: [{"key":"Resolution","value":"720p"},{"key":"Name"}].
   * - appInstanceGroupIds: the list of specified delivery group IDs.
   * - appInstancePersistentId: the specified persistent session ID.
   * - avatarId: the user avatar ID. Default value: default. This parameter is used to support assigning multiple session instances to a single user.
   * 
   * > Used when connecting to a cloud phone. Pass the fixed value `{"authMode":"Session"}`.
   * 
   * @example
   * {"authMode":"Session"}
   */
  connectionProperties?: string;
  /**
   * @remarks
   * The username of the convenience account.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The environment configuration.
   * 
   * @example
   * {"screenWidth":2560,"screenHeight":1564}
   */
  environmentConfig?: string;
  /**
   * @remarks
   * The logon region ID. When a user logs on to a workspace, this parameter specifies the ID of the region to which the workspace belongs.
   * 
   * @example
   * cn-hangzhou
   */
  loginRegionId?: string;
  /**
   * @remarks
   * The logon token.
   * Obtained by calling the GetLoginToken or GetStsToken API operation.
   * The GetLoginToken and GetStsToken API operations belong to the client logon authentication APIs of the 2021-02-20 version of WUYING Cloud App (product code: appstream-center). These two API operations are not provided in the 2021-09-03 version. OpenAPI Explorer links: https://api.aliyun.com/api/appstream-center/2021-02-20/GetLoginToken and https://api.aliyun.com/api/appstream-center/2021-02-20/GetStsToken.
   * Note: This parameter is required. If it is not provided, the API returns InvalidParameter.loginToken(400).
   * 
   * @example
   * v2c4e2ef03d62******
   */
  loginToken?: string;
  /**
   * @remarks
   * The application startup parameters.
   * 
   * @example
   * /q /n
   */
  param?: string;
  /**
   * @remarks
   * The product type.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * Specifies whether UUID validation is required.
   * 
   * @example
   * true
   */
  requireUuidValidation?: boolean;
  /**
   * @remarks
   * The resource ID.
   * 
   * > Used when connecting to a cloud phone. Pass the persistent session ID that corresponds to the cloud phone instance.
   * > When connecting to a cloud browser, pass the cloud browser ID.
   * > When connecting to a cloud application, pass the application ID for the application authorization scenario, the delivery group ID for the delivery group authorization scenario, or the persistent session ID for the persistent session authorization scenario.
   * 
   * @example
   * p-0cdr5c9kl******
   */
  resourceId?: string;
  /**
   * @remarks
   * The logon session ID. Obtained by calling the GetLoginToken or GetStsToken API operation. This parameter is used together with LoginToken.
   * The GetLoginToken and GetStsToken API operations belong to the client logon authentication APIs of the 2021-02-20 version of WUYING Cloud App (product code: appstream-center). These two API operations are not provided in the 2021-09-03 version. OpenAPI Explorer links: https://api.aliyun.com/api/appstream-center/2021-02-20/GetLoginToken and https://api.aliyun.com/api/appstream-center/2021-02-20/GetStsToken.
   * Note: This parameter is required. If it is not provided, the API returns InvalidParameter.sessionId(400). This parameter must be used together with LoginToken.
   * 
   * @example
   * 09e2b2e6-3181******
   */
  sessionId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * > Required when you invoke the API not for the first time. Use this parameter query to check the node status and connection credentials.
   * 
   * @example
   * 6f41731b-7091-4******
   */
  taskId?: string;
  /**
   * @remarks
   * The tenant ID, which is the Alibaba Cloud account UID.
   * 
   * @example
   * 1126819517******
   */
  tenantId?: string;
  /**
   * @remarks
   * The unique identifier of the logon device.
   * 
   * @example
   * A8B35215993FBF283F28D61******
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
      requireUuidValidation: 'RequireUuidValidation',
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
      requireUuidValidation: 'boolean',
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


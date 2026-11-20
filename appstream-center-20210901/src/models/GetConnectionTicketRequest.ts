// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The access type.
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
   * > Required for the initial call and optional for subsequent calls.
   * 
   * @example
   * ca-e4s0puhmwi7v****
   */
  appId?: string;
  /**
   * @remarks
   * The delivery group list.
   * 
   * > - If this parameter is specified, an application instance is assigned only from the specified and authorized delivery groups.
   * > - If the AppInstanceId or AppInstancePersistentId parameter is specified, this parameter is required.
   */
  appInstanceGroupIdList?: string[];
  /**
   * @remarks
   * The ID of the delivery group set used to obtain connection credentials.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * The application instance ID.
   * 
   * > 
   * > - If this parameter is specified, the system attempts to assign only the specified application instance.
   * > - If this parameter is specified, the AppInstanceGroupIdList parameter must also be specified, and the number of delivery group IDs in AppInstanceGroupIdList must be 1.
   * 
   * @example
   * ai-1rznfnrvsa99d****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The persistent session ID.
   * 
   * @example
   * p-0bxls9m3cl7s****
   */
  appInstancePersistentId?: string;
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
   * The application startup parameters. This parameter is optional. You can refer to the image creation documentation to fill in the startup parameters and manually verify them during the image creation process. This field is suitable for startup parameters with variable content, allowing API callers to configure them flexibly. For more information about how to obtain startup parameters, see [How to obtain application installation and startup parameters](https://help.aliyun.com/document_detail/426045.html).
   * 
   * @example
   * /q /n
   */
  appStartParam?: string;
  /**
   * @remarks
   * The application version. If this parameter is specified, only the application of the specified version is started. If this parameter is not specified, an authorized application of any version is started.
   * 
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > If this parameter is specified, an application instance is assigned only from the delivery groups in the specified region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The username.
   * 
   * This parameter is required.
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
   * {"userConfigReenter":"NATIVE"}
   */
  environmentConfig?: string;
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
   * The node ID.
   * 
   * > Required for non-initial invocations. Use this parameter to invoke a parameter query for the node status and connection credentials.
   * 
   * @example
   * 28778acb-a469-4bc0-8e0f****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      appId: 'AppId',
      appInstanceGroupIdList: 'AppInstanceGroupIdList',
      appInstanceGroupSetId: 'AppInstanceGroupSetId',
      appInstanceId: 'AppInstanceId',
      appInstancePersistentId: 'AppInstancePersistentId',
      appPolicyId: 'AppPolicyId',
      appStartParam: 'AppStartParam',
      appVersion: 'AppVersion',
      bizRegionId: 'BizRegionId',
      endUserId: 'EndUserId',
      environmentConfig: 'EnvironmentConfig',
      productType: 'ProductType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      appId: 'string',
      appInstanceGroupIdList: { 'type': 'array', 'itemType': 'string' },
      appInstanceGroupSetId: 'string',
      appInstanceId: 'string',
      appInstancePersistentId: 'string',
      appPolicyId: 'string',
      appStartParam: 'string',
      appVersion: 'string',
      bizRegionId: 'string',
      endUserId: 'string',
      environmentConfig: 'string',
      productType: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appInstanceGroupIdList)) {
      $dara.Model.validateArray(this.appInstanceGroupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


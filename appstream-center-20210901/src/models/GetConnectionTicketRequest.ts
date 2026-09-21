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
   * > This parameter is required for the initial call and optional for subsequent calls.
   * 
   * @example
   * ca-e4s0puhmwi7v****
   */
  appId?: string;
  /**
   * @remarks
   * The list of delivery groups.
   * 
   * > - If you specify this parameter, application instances are allocated only from the specified and authorized delivery groups.
   * > - If you specify the `AppInstanceId` or `AppInstancePersistentId` parameter, this parameter is required.
   */
  appInstanceGroupIdList?: string[];
  /**
   * @remarks
   * The delivery group set ID used to obtain the connection credential.
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
   * > - If you specify this parameter, only the specified application instance is allocated.
   * > - If you specify this parameter, you must also specify the `AppInstanceGroupIdList` parameter, and the number of delivery group IDs in `AppInstanceGroupIdList` must be 1.
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
   * The application startup parameter. This parameter is optional. You can refer to the method for specifying startup parameters in the image creation documentation and manually verify the startup parameters during image creation. This field is suitable for startup parameters with variable content, allowing API callers to set them flexibly. For more information about how to obtain startup parameters, see [How to obtain application installation parameters and startup parameters](https://help.aliyun.com/document_detail/426045.html).
   * 
   * @example
   * /q /n
   */
  appStartParam?: string;
  /**
   * @remarks
   * The application version. If you specify this parameter, only the specified version of the application is opened. If you do not specify this parameter, any authorized version of the application is opened.
   * 
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > If you specify this parameter, application instances are allocated only from delivery groups in the specified region.
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
   * > This parameter is required for non-initial calls. Use this parameter query to invoke the node status and connection credential retrieval.
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


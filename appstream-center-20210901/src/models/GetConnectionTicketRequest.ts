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
   * @remarks
   * The application ID.
   * 
   * >  This parameter is required for the first call to this operation and optional for subsequent calls to the operation.
   * 
   * @example
   * ca-e4s0puhmwi7v****
   */
  appId?: string;
  /**
   * @remarks
   * The delivery groups.
   * 
   * > *   If you configure this parameter, the system assigns application instances only among the specified authorized delivery groups. 
   * > *   This parameter is required if you configure `AppInstanceId` or `AppInstancePersistentId`.
   */
  appInstanceGroupIdList?: string[];
  /**
   * @remarks
   * The ID of the application instance.
   * 
   * > *   If you configure this parameter, the system attempts to assign only the specified application instance.
   * > *   If you configure this parameter, you must also configure `AppInstanceGroupIdList` and the number of delivery groups specified by `AppInstanceGroupIdList` must be 1.
   * 
   * @example
   * ai-1rznfnrvsa99d****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The ID of the persistent session.
   * 
   * @example
   * p-0bxls9m3cl7s****
   */
  appInstancePersistentId?: string;
  appPolicyId?: string;
  /**
   * @remarks
   * The parameters that are configured to start the application. For information about how to obtain these parameters, see [Obtain parameters configured to install and start an application](https://help.aliyun.com/document_detail/426045.html).
   * 
   * @example
   * /q /n
   */
  appStartParam?: string;
  /**
   * @remarks
   * The application version. If you configure this parameter, only an application of the specified version is started. If you do not configure this parameter, an application of a random authorized version is started.
   * 
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  If you configure this parameter, the system assigns application instances only among the delivery groups that reside in the specified region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The ID of the convenience account.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The product type.
   * 
   * Valid values:
   * 
   * *   CloudApp: App Streaming
   * *   AndroidCloud: Cloud Phone
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * >  This parameter is required for calls other than the first call to this operation. You can use this parameter to query the task status and connection credential.
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
      appInstanceId: 'AppInstanceId',
      appInstancePersistentId: 'AppInstancePersistentId',
      appPolicyId: 'AppPolicyId',
      appStartParam: 'AppStartParam',
      appVersion: 'AppVersion',
      bizRegionId: 'BizRegionId',
      endUserId: 'EndUserId',
      productType: 'ProductType',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      appId: 'string',
      appInstanceGroupIdList: { 'type': 'array', 'itemType': 'string' },
      appInstanceId: 'string',
      appInstancePersistentId: 'string',
      appPolicyId: 'string',
      appStartParam: 'string',
      appVersion: 'string',
      bizRegionId: 'string',
      endUserId: 'string',
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


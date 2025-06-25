// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAppInstanceGroupResponseBodyAppInstanceGroupModelsApps } from "./ListAppInstanceGroupResponseBodyAppInstanceGroupModelsApps";
import { ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool } from "./ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool";
import { ListAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo } from "./ListAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo";
import { ListAppInstanceGroupResponseBodyAppInstanceGroupModelsResourceTags } from "./ListAppInstanceGroupResponseBodyAppInstanceGroupModelsResourceTags";
import { ListAppInstanceGroupResponseBodyAppInstanceGroupModelsTags } from "./ListAppInstanceGroupResponseBodyAppInstanceGroupModelsTags";


export class ListAppInstanceGroupResponseBodyAppInstanceGroupModels extends $dara.Model {
  /**
   * @example
   * INTERNET
   */
  accessType?: string;
  /**
   * @remarks
   * The number of subscription resources. Minimum value: 1.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The image ID of the app.
   * 
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the delivery group.
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The resource type of the delivery group.
   * 
   * @example
   * __dynamic__
   */
  appInstanceType?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pg-g3k5wa2ms2****
   */
  appPolicyId?: string;
  /**
   * @example
   * false
   */
  appPolicyImageCheck?: boolean;
  /**
   * @example
   * CENTER
   */
  appPolicyVersion?: string;
  /**
   * @remarks
   * The apps.
   */
  apps?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsApps[];
  /**
   * @example
   * App
   */
  authMode?: string;
  /**
   * @remarks
   * The sales mode.
   * 
   * Valid values:
   * 
   * *   AppInstance: by session
   * *   Node: by resource
   * 
   * @example
   * Node
   */
  chargeResourceMode?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PostPaid: pay-as-you-go
   * *   PrePaid: subscription
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the delivery group expires.
   * 
   * @example
   * 2022-04-27T16:00:00.000+00:00
   */
  expiredTime?: string;
  /**
   * @remarks
   * The time when the delivery group was created.
   * 
   * @example
   * 2022-04-26T15:06:16.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The maximum number of instances. Minimum value: 1.
   * 
   * @example
   * 10
   */
  maxAmount?: number;
  /**
   * @remarks
   * The minimum number of instances. Minimum value: 1.
   * 
   * @example
   * 1
   */
  minAmount?: number;
  /**
   * @remarks
   * The resource groups.
   */
  nodePool?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool[];
  /**
   * @example
   * cn-beijing+dir-172301****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The type of the operating system.
   * 
   * Valid value:
   * 
   * *   Windows
   * 
   * @example
   * Windows
   */
  osType?: string;
  /**
   * @remarks
   * The information about the over-the-air (OTA) update task.
   */
  otaInfo?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo;
  /**
   * @remarks
   * The product type.
   * 
   * Valid value:
   * 
   * *   CloudApp: App Streaming
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the region where the delivery group resides. For information about the supported regions, see [Limits](https://help.aliyun.com/document_detail/426036.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The percentage of reserved instances. The value indicates the percentage of unused sessions in the delivery group. Valid values: 0 to 99.
   * 
   * @example
   * 20
   */
  reserveAmountRatio?: string;
  /**
   * @remarks
   * The maximum number of reserved instances. The value indicates the maximum number of unused sessions in the delivery group. Minimum value: 1.
   * 
   * @example
   * 5
   */
  reserveMaxAmount?: number;
  /**
   * @remarks
   * The minimum number of reserved instances. The value indicates the minimum number of unused sessions in the delivery group. Minimum value: 1.
   * 
   * @example
   * 1
   */
  reserveMinAmount?: number;
  /**
   * @remarks
   * The resource status.
   * 
   * Valid values:
   * 
   * *   AVAILABLE
   * *   RELEASED
   * *   EXPIRED_IN_7_DAYS
   * *   UNAVAILABLE
   * *   UPGRADING
   * *   CREATING
   * 
   * @example
   * AVAILABLE
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The resource tags.
   */
  resourceTags?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsResourceTags[];
  /**
   * @remarks
   * The duration for which no session is connected. Unit: minutes. If no session is connected in the resources after the specified duration elapses, auto scale-in is triggered. Minimum value: 0.
   * 
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @remarks
   * The number of sessions that are created each time the delivery group is scaled out. Minimum value: 1.
   * 
   * @example
   * 10
   */
  scalingStep?: number;
  /**
   * @remarks
   * The upper limit of session usage. If the session usage exceeds the specified upper limit, auto scale-out is triggered. The session usage rate is calculated by using the following formula: Session usage rate = Number of sessions in use/Total number of sessions × 100%. Valid values: 0 to 99.
   * 
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @remarks
   * The duration for which sessions are retained after disconnection. Unit: minutes. After an end user disconnects from a session, the session is closed only after the specified duration elapses. If you want to permanently retain sessions, set this parameter to `-1`. Valid values:-1 and 3 to 300. Default value: `15`.
   * 
   * @example
   * 15
   */
  sessionTimeout?: string;
  /**
   * @remarks
   * Indicates whether user permission verification is skipped.
   * 
   * Valid values:
   * 
   * *   true
   * *   false: This is the default value.
   * 
   * @example
   * false
   */
  skipUserAuthCheck?: boolean;
  /**
   * @remarks
   * The specification ID that uniquely corresponds to the ID of the delivery group.
   * 
   * @example
   * spec-8o18t8uc31qib0****
   */
  specId?: string;
  /**
   * @remarks
   * The status of the delivery group.
   * 
   * Valid values:
   * 
   * *   PUBLISHED: The delivery group is published.
   * *   FAILED: The delivery group failed to be published.
   * *   MAINTAIN_FAILED: The delivery group failed to be updated.
   * *   EXPIRED: The delivery group is expired.
   * *   MAINTAINING: The delivery group is being updated.
   * *   CEASED: The delivery group has overdue payments.
   * *   EXPIRED_RECYCLING: The delivery group is expired and being recycled.
   * *   DEPLOYING: The delivery group is being published.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  tags?: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsTags[];
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      amount: 'Amount',
      appCenterImageId: 'AppCenterImageId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      appInstanceType: 'AppInstanceType',
      appPolicyId: 'AppPolicyId',
      appPolicyImageCheck: 'AppPolicyImageCheck',
      appPolicyVersion: 'AppPolicyVersion',
      apps: 'Apps',
      authMode: 'AuthMode',
      chargeResourceMode: 'ChargeResourceMode',
      chargeType: 'ChargeType',
      expiredTime: 'ExpiredTime',
      gmtCreate: 'GmtCreate',
      maxAmount: 'MaxAmount',
      minAmount: 'MinAmount',
      nodePool: 'NodePool',
      officeSiteId: 'OfficeSiteId',
      osType: 'OsType',
      otaInfo: 'OtaInfo',
      productType: 'ProductType',
      regionId: 'RegionId',
      reserveAmountRatio: 'ReserveAmountRatio',
      reserveMaxAmount: 'ReserveMaxAmount',
      reserveMinAmount: 'ReserveMinAmount',
      resourceStatus: 'ResourceStatus',
      resourceTags: 'ResourceTags',
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingStep: 'ScalingStep',
      scalingUsageThreshold: 'ScalingUsageThreshold',
      sessionTimeout: 'SessionTimeout',
      skipUserAuthCheck: 'SkipUserAuthCheck',
      specId: 'SpecId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      amount: 'number',
      appCenterImageId: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      appInstanceType: 'string',
      appPolicyId: 'string',
      appPolicyImageCheck: 'boolean',
      appPolicyVersion: 'string',
      apps: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsApps },
      authMode: 'string',
      chargeResourceMode: 'string',
      chargeType: 'string',
      expiredTime: 'string',
      gmtCreate: 'string',
      maxAmount: 'number',
      minAmount: 'number',
      nodePool: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool },
      officeSiteId: 'string',
      osType: 'string',
      otaInfo: ListAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo,
      productType: 'string',
      regionId: 'string',
      reserveAmountRatio: 'string',
      reserveMaxAmount: 'number',
      reserveMinAmount: 'number',
      resourceStatus: 'string',
      resourceTags: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsResourceTags },
      scalingDownAfterIdleMinutes: 'number',
      scalingStep: 'number',
      scalingUsageThreshold: 'string',
      sessionTimeout: 'string',
      skipUserAuthCheck: 'boolean',
      specId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListAppInstanceGroupResponseBodyAppInstanceGroupModelsTags },
    };
  }

  validate() {
    if(Array.isArray(this.apps)) {
      $dara.Model.validateArray(this.apps);
    }
    if(Array.isArray(this.nodePool)) {
      $dara.Model.validateArray(this.nodePool);
    }
    if(this.otaInfo && typeof (this.otaInfo as any).validate === 'function') {
      (this.otaInfo as any).validate();
    }
    if(Array.isArray(this.resourceTags)) {
      $dara.Model.validateArray(this.resourceTags);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


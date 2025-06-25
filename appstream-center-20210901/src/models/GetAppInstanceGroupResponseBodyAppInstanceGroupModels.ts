// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAppInstanceGroupResponseBodyAppInstanceGroupModelsApps } from "./GetAppInstanceGroupResponseBodyAppInstanceGroupModelsApps";
import { GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool } from "./GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool";
import { GetAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo } from "./GetAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo";
import { GetAppInstanceGroupResponseBodyAppInstanceGroupModelsTags } from "./GetAppInstanceGroupResponseBodyAppInstanceGroupModelsTags";


export class GetAppInstanceGroupResponseBodyAppInstanceGroupModels extends $dara.Model {
  /**
   * @example
   * INTERNET
   */
  accessType?: string;
  amount?: number;
  /**
   * @example
   * img-8z4nztpaqvay4****
   */
  appCenterImageId?: string;
  /**
   * @example
   * OfficeApps
   */
  appCenterImageName?: string;
  /**
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  appInstanceGroupName?: string;
  /**
   * @example
   * __dynamic__
   */
  appInstanceType?: string;
  /**
   * @example
   * test001
   */
  appInstanceTypeName?: string;
  /**
   * @example
   * pg-g3k5wa2ms2****
   */
  appPolicyId?: string;
  apps?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsApps[];
  /**
   * @example
   * App
   */
  authMode?: string;
  /**
   * @example
   * Node
   */
  chargeResourceMode?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * 2022-04-27T16:00:00.000+00:00
   */
  expiredTime?: string;
  /**
   * @example
   * 2022-04-26T15:06:16.000+00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 10
   */
  maxAmount?: number;
  /**
   * @example
   * 1
   */
  minAmount?: number;
  nodePool?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool[];
  officeSiteId?: string;
  /**
   * @example
   * Windows
   */
  osType?: string;
  otaInfo?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo;
  /**
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 20
   */
  reserveAmountRatio?: string;
  /**
   * @example
   * 5
   */
  reserveMaxAmount?: number;
  /**
   * @example
   * 1
   */
  reserveMinAmount?: number;
  /**
   * @example
   * AVAILABLE
   */
  resourceStatus?: string;
  /**
   * @example
   * 5
   */
  scalingDownAfterIdleMinutes?: number;
  /**
   * @example
   * 10
   */
  scalingStep?: number;
  /**
   * @example
   * 85
   */
  scalingUsageThreshold?: string;
  /**
   * @example
   * 15
   */
  sessionTimeout?: string;
  sessionType?: string;
  /**
   * @example
   * false
   */
  skipUserAuthCheck?: boolean;
  /**
   * @example
   * spec-8o18t8uc31qib0****
   */
  specId?: string;
  /**
   * @example
   * PUBLISHED
   */
  status?: string;
  tags?: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsTags[];
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      amount: 'Amount',
      appCenterImageId: 'AppCenterImageId',
      appCenterImageName: 'AppCenterImageName',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      appInstanceType: 'AppInstanceType',
      appInstanceTypeName: 'AppInstanceTypeName',
      appPolicyId: 'AppPolicyId',
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
      scalingDownAfterIdleMinutes: 'ScalingDownAfterIdleMinutes',
      scalingStep: 'ScalingStep',
      scalingUsageThreshold: 'ScalingUsageThreshold',
      sessionTimeout: 'SessionTimeout',
      sessionType: 'SessionType',
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
      appCenterImageName: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      appInstanceType: 'string',
      appInstanceTypeName: 'string',
      appPolicyId: 'string',
      apps: { 'type': 'array', 'itemType': GetAppInstanceGroupResponseBodyAppInstanceGroupModelsApps },
      authMode: 'string',
      chargeResourceMode: 'string',
      chargeType: 'string',
      expiredTime: 'string',
      gmtCreate: 'string',
      maxAmount: 'number',
      minAmount: 'number',
      nodePool: { 'type': 'array', 'itemType': GetAppInstanceGroupResponseBodyAppInstanceGroupModelsNodePool },
      officeSiteId: 'string',
      osType: 'string',
      otaInfo: GetAppInstanceGroupResponseBodyAppInstanceGroupModelsOtaInfo,
      productType: 'string',
      regionId: 'string',
      reserveAmountRatio: 'string',
      reserveMaxAmount: 'number',
      reserveMinAmount: 'number',
      resourceStatus: 'string',
      scalingDownAfterIdleMinutes: 'number',
      scalingStep: 'number',
      scalingUsageThreshold: 'string',
      sessionTimeout: 'string',
      sessionType: 'string',
      skipUserAuthCheck: 'boolean',
      specId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': GetAppInstanceGroupResponseBodyAppInstanceGroupModelsTags },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


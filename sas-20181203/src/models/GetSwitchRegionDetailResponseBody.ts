// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSwitchRegionDetailResponseBodyDataRegionStatus extends $dara.Model {
  /**
   * @remarks
   * The number of ECS instances.
   * 
   * @example
   * 27
   */
  ecsCount?: number;
  /**
   * @remarks
   * The time when the migration is scheduled.
   * 
   * @example
   * 1692858597000
   */
  gmtPlanSwitchTime?: number;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * @example
   * us-east-1
   */
  regionId?: string;
  /**
   * @remarks
   * The migration status. Valid values:
   * 
   * *   **0**: pending
   * *   **1**: successful
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      ecsCount: 'EcsCount',
      gmtPlanSwitchTime: 'GmtPlanSwitchTime',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsCount: 'number',
      gmtPlanSwitchTime: 'number',
      regionId: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchRegionDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the permissions were modified.
   * 
   * @example
   * 1692858597000
   */
  gmtIsAgreeModified?: number;
  /**
   * @remarks
   * The notification time.
   * 
   * @example
   * 1692858597000
   */
  gmtNoticed?: number;
  /**
   * @remarks
   * Indicates whether the migration is approved.
   * 
   * @example
   * true
   */
  isAgree?: string;
  /**
   * @remarks
   * Indicates whether the notification is sent.
   * 
   * @example
   * YES
   */
  isNoticed?: string;
  needNotice?: boolean;
  needSwitch?: boolean;
  /**
   * @remarks
   * The status of the switching to the region.
   */
  regionStatus?: GetSwitchRegionDetailResponseBodyDataRegionStatus[];
  static names(): { [key: string]: string } {
    return {
      gmtIsAgreeModified: 'GmtIsAgreeModified',
      gmtNoticed: 'GmtNoticed',
      isAgree: 'IsAgree',
      isNoticed: 'IsNoticed',
      needNotice: 'NeedNotice',
      needSwitch: 'NeedSwitch',
      regionStatus: 'RegionStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtIsAgreeModified: 'number',
      gmtNoticed: 'number',
      isAgree: 'string',
      isNoticed: 'string',
      needNotice: 'boolean',
      needSwitch: 'boolean',
      regionStatus: { 'type': 'array', 'itemType': GetSwitchRegionDetailResponseBodyDataRegionStatus },
    };
  }

  validate() {
    if(Array.isArray(this.regionStatus)) {
      $dara.Model.validateArray(this.regionStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchRegionDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetSwitchRegionDetailResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30CBF632-109F-596F-97F2-451C8B2A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSwitchRegionDetailResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDesktopGroupScaleTimerRequestScaleTimerInfos extends $dara.Model {
  /**
   * @remarks
   * The number of cloud computers to purchase. This is one of the scaling policy parameters. Valid values: 0 to 200.
   * 
   * @example
   * 5
   */
  buyResAmount?: number;
  /**
   * @remarks
   * The cron expression for the trigger time.
   * 
   * @example
   * 0 0 12 ? * 1
   */
  cron?: string;
  /**
   * @remarks
   * The duration for which a session is retained after disconnection. Unit: milliseconds. Valid values: 180000 (3 minutes) to 345600000 (4 days). A value of 0 indicates that the session is always retained.
   * 
   * When a session is disconnected because the user actively disconnects or because of other unexpected factors, the retention period starts from the time of disconnection. If the user does not reconnect to the session within the retention period, the session is logged off and all unsaved data is destroyed. If the user reconnects within the retention period, the user can still access the original session and the data that existed before the disconnection.
   * 
   * @example
   * 180000
   */
  keepDuration?: number;
  /**
   * @remarks
   * The load balancing policy for the multi-session cloud computer pool.
   * 
   * @example
   * 0
   */
  loadPolicy?: number;
  /**
   * @remarks
   * The maximum number of cloud computers. This is one of the scaling policy parameters. Valid values: 0 to 200.
   * 
   * @example
   * 100
   */
  maxResAmount?: number;
  /**
   * @remarks
   * The minimum number of cloud computers. This is one of the scaling policy parameters. Valid values: 0 to 200.
   * 
   * @example
   * 5
   */
  minResAmount?: number;
  /**
   * @remarks
   * The session occupancy threshold, which is used as the trigger condition for automatic scaling of the multi-session cloud computer pool. The session occupancy is calculated by using the following formula:
   * 
   * ```Session occupancy = Number of attached sessions / (Total number of cloud computer resources × Maximum number of sessions supported per cloud computer) × 100%```
   * 
   * When the session occupancy reaches this threshold, new cloud computers are created. When the session occupancy does not reach this threshold, excess cloud computers are deleted.
   * 
   * @example
   * 0.85
   */
  ratioThreshold?: number;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * rise
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buyResAmount: 'BuyResAmount',
      cron: 'Cron',
      keepDuration: 'KeepDuration',
      loadPolicy: 'LoadPolicy',
      maxResAmount: 'MaxResAmount',
      minResAmount: 'MinResAmount',
      ratioThreshold: 'RatioThreshold',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyResAmount: 'number',
      cron: 'string',
      keepDuration: 'number',
      loadPolicy: 'number',
      maxResAmount: 'number',
      minResAmount: 'number',
      ratioThreshold: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDesktopGroupScaleTimerRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud computer pool ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of scheduled task information for automatic scaling.
   */
  scaleTimerInfos?: SetDesktopGroupScaleTimerRequestScaleTimerInfos[];
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
      scaleTimerInfos: 'ScaleTimerInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
      scaleTimerInfos: { 'type': 'array', 'itemType': SetDesktopGroupScaleTimerRequestScaleTimerInfos },
    };
  }

  validate() {
    if(Array.isArray(this.scaleTimerInfos)) {
      $dara.Model.validateArray(this.scaleTimerInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


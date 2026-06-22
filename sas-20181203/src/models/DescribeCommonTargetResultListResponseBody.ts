// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommonTargetResultListResponseBodyTargetConfig extends $dara.Model {
  /**
   * @remarks
   * The asset configuration flag. Valid values:
   * 
   * - **add**: The configuration takes effect on the asset.
   * - **del**: The configuration does not take effect on the asset.
   * 
   * @example
   * del
   */
  flag?: string;
  /**
   * @remarks
   * The default flag for asset configuration.
   * 
   * @example
   * add
   */
  targetDefault?: string;
  /**
   * @remarks
   * The group ID or asset UUID on which the configuration takes effect.
   * > If **TargetType** returns **uuid**, this field indicates the **UUID** of the asset. If **TargetType** returns **groupId**, this field indicates the group ID.
   */
  targetList?: string[];
  /**
   * @remarks
   * The selection mode for the assets on which the configuration takes effect. Valid values:
   * 
   * - **uuid**: Added by individual asset.
   * - **groupId**: Added by server group.
   * 
   * @example
   * uuid
   */
  targetType?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 22
   */
  totalCount?: string;
  /**
   * @remarks
   * The configuration type. Valid values:
   * 
   * - **webshell_timescan**: web shell scan.
   * - **aliscriptengine**: deep detection engine.
   * - **alidetect**: installation scope of the local file detection engine.
   * - **alidetect-scan-enable**: detection scope of the local file detection engine.
   * 
   * @example
   * webshell_timescan
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      flag: 'Flag',
      targetDefault: 'TargetDefault',
      targetList: 'TargetList',
      targetType: 'TargetType',
      totalCount: 'TotalCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flag: 'string',
      targetDefault: 'string',
      targetList: { 'type': 'array', 'itemType': 'string' },
      targetType: 'string',
      totalCount: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targetList)) {
      $dara.Model.validateArray(this.targetList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCommonTargetResultListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * 6673D49C-A9AB-40DD-B4A2-B92306701AE7
   */
  requestId?: string;
  /**
   * @remarks
   * The configuration information.
   */
  targetConfig?: DescribeCommonTargetResultListResponseBodyTargetConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      targetConfig: 'TargetConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      targetConfig: DescribeCommonTargetResultListResponseBodyTargetConfig,
    };
  }

  validate() {
    if(this.targetConfig && typeof (this.targetConfig as any).validate === 'function') {
      (this.targetConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


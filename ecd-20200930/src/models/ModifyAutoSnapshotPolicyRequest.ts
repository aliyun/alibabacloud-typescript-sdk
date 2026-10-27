// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 20 16 ? * 1,2,3,4,5,6,7
   */
  cronExpression?: string;
  /**
   * @remarks
   * The type of the cloud disk for which the automatic snapshot policy creates snapshots.
   * 
   * @example
   * ALL
   */
  diskType?: string;
  /**
   * @remarks
   * The ID of the automatic snapshot policy.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-itcmrhqt01tdo****
   */
  policyId?: string;
  /**
   * @remarks
   * The name of the automatic snapshot policy. The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), and hyphens (-). Default value: empty.
   * 
   * @example
   * System automatic snapshot
   */
  policyName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The retention period of automatic snapshots. Unit: days. Valid values: 1 to 180.
   * 
   * @example
   * 2
   */
  retentionDays?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      diskType: 'DiskType',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      retentionDays: 'RetentionDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      diskType: 'string',
      policyId: 'string',
      policyName: 'string',
      regionId: 'string',
      retentionDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


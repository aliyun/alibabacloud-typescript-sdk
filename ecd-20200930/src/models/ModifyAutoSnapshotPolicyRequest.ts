// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The CRON expression.
   * 
   * @example
   * 0 20 16 ? * 1,2,3,4,5,6,7
   */
  cronExpression?: string;
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
   * The name of the automatic snapshot policy. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). This parameter is empty by default.
   * 
   * @example
   * Automatic system snapshot
   */
  policyName?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The retention period of the automatic snapshots. Unit: days. Valid values: 1 to 180.
   * 
   * @example
   * 5
   */
  retentionDays?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      policyId: 'PolicyId',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      retentionDays: 'RetentionDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
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


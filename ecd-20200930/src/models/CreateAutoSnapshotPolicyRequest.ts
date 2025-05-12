// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The CRON expression for periodic scheduling.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 0 2 ? * 1-7
   */
  cronExpression?: string;
  /**
   * @remarks
   * The name of the automatic snapshot policy. The name must be 2 to 128 characters in length. The name must start with a letter but cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-). This parameter is empty by default.
   * 
   * This parameter is required.
   * 
   * @example
   * test_auto_policy
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
   * This parameter is required.
   * 
   * @example
   * 30
   */
  retentionDays?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      retentionDays: 'RetentionDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
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


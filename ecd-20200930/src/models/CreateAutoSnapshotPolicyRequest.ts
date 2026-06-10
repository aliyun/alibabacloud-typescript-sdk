// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoSnapshotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The cron expression for the recurring schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 0 2 ? * 1-7
   */
  cronExpression?: string;
  diskType?: string;
  /**
   * @remarks
   * The name of the automatic snapshot policy. It can contain 2 to 128 English or Chinese characters. It must start with a letter or a Chinese character, and cannot start with `http://` or `https://`. It can contain digits, colons (:), underscores (_), or hyphens (-). Default value: empty.
   * 
   * This parameter is required.
   * 
   * @example
   * test_auto_policy
   */
  policyName?: string;
  /**
   * @remarks
   * The region ID. For more information, see [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to get a list of regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The retention period of the automatic snapshot, in days. Valid values: 1 to 180.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  retentionDays?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      diskType: 'DiskType',
      policyName: 'PolicyName',
      regionId: 'RegionId',
      retentionDays: 'RetentionDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      diskType: 'string',
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


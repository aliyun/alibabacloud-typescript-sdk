// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResubmitConfigResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether out-of-memory (OOM) check is configured.
   * 
   * @example
   * false
   */
  exceedMemoryException?: boolean;
  /**
   * @remarks
   * The name of the source resource group.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The peak memory usage.
   * 
   * @example
   * 32
   */
  peakMemory?: string;
  /**
   * @remarks
   * The duration of the SQL statement. Unit: milliseconds.
   * 
   * @example
   * 300
   */
  queryTime?: string;
  /**
   * @remarks
   * The name of the destination resource group.
   * 
   * @example
   * test_target_group
   */
  targetGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      exceedMemoryException: 'ExceedMemoryException',
      groupName: 'GroupName',
      peakMemory: 'PeakMemory',
      queryTime: 'QueryTime',
      targetGroupName: 'TargetGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceedMemoryException: 'boolean',
      groupName: 'string',
      peakMemory: 'string',
      queryTime: 'string',
      targetGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


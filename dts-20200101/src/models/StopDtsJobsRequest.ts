// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDtsJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data migration or data synchronization task.
   * 
   * > 
   * *   Separate multiple task IDs by **,** (commas).
   * *   You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * l5o11f9029c****
   */
  dtsJobIds?: string;
  /**
   * @remarks
   * The region ID of the DTS instance. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aekzsf6yoxhfpva
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Whether it is a seamless integration (Zero-ETL) task, the value can be:
   * - **false**: No. - **true**: Yes.
   * 
   * @example
   * true
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobIds: 'DtsJobIds',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobIds: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


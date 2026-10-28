// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDtsJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the data migration, data synchronization, or change tracking tasks.
   * > - You can specify up to 10 task IDs. Separate multiple task IDs with commas (,).
   * - You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query DTS task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * l5o11f9029c****
   */
  dtsJobIds?: string;
  /**
   * @remarks
   * The region where the DTS instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A dedicated field for special business scenarios. You do not need to specify this parameter.
   * 
   * @example
   * rg3m1213ye7l****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * A dedicated field for special business scenarios. You do not need to specify this parameter.
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


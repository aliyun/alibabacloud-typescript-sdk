// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDtsJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the data migration, data synchronization, or change tracking tasks.
   * > - You can specify up to 10 task IDs, separated by commas (,).
   * - You can call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to query the DTS task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * l5o11f9029c****
   */
  dtsJobIds?: string;
  /**
   * @remarks
   * The region in which the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A special parameter for specific business scenarios. You do not need to configure this parameter.
   * 
   * @example
   * rg3m1213ye7l****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * A special parameter for specific business scenarios. You do not need to configure this parameter.
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


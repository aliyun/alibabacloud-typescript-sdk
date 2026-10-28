// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDtsJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the migration and synchronization tasks.
   * > - Separate multiple task IDs with commas (**,**).
   * - Call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to obtain DTS task IDs.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzsf6yoxhfpva
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether the node is a seamless integration (Zero-ETL) node. Valid values:
   * 
   * - **false**: No.
   * - **true**: Yes.
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


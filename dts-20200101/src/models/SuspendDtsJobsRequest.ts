// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuspendDtsJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the migration or synchronization tasks.
   * > - Separate multiple task IDs with commas (,).
   * - Call [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) to obtain the DTS task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * hfi12iv4z7e****
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
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
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


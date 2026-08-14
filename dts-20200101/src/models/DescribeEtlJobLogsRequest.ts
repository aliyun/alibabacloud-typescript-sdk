// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEtlJobLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ETL task. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vd*********2ls
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The region ID of the DTS instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the list of Alibaba Cloud regions.
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
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


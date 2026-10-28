// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsEtlJobVersionInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DTS instance. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsggk12iwya1a****
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The ID of the ETL task. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
   * 
   * @example
   * l5512es7w15****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The page number of the instance status list. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The paging Settings for the number of entries per page in a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsInstanceId: 'DtsInstanceId',
      dtsJobId: 'DtsJobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsInstanceId: 'string',
      dtsJobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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


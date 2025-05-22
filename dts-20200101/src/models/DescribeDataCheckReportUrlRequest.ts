// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataCheckReportUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The data verification method. Valid values:
   * 
   * *   **1**: full data verification.
   * *   **2**: incremental data verification.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The name of the verified source database.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsdb
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the Data Transmission Service (DTS) task. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to query the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f4612nr2182****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the table verified in the source database.
   * 
   * This parameter is required.
   * 
   * @example
   * student
   */
  tbName?: string;
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      dbName: 'DbName',
      dtsJobId: 'DtsJobId',
      resourceGroupId: 'ResourceGroupId',
      tbName: 'TbName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      dbName: 'string',
      dtsJobId: 'string',
      resourceGroupId: 'string',
      tbName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


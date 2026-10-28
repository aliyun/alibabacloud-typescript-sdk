// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataCheckReportUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The data validation method. Valid values: **1**: full validation. Currently, only **1** is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The name of the source database to be verified.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsdb
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the DTS task. You can call the [DescribeDtsJobs](https://help.aliyun.com/document_detail/209702.html) operation to obtain the task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f4612nr2182****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the table to be verified in the source database.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQAConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * @example
   * am-8vbyw9awuj141haf9
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBE843D8-964D-5EA3-9D31-822125611B6E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether short query acceleration (SQA) is enabled.
   * 
   * @example
   * off
   */
  SQAStatus?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      requestId: 'RequestId',
      SQAStatus: 'SQAStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      requestId: 'string',
      SQAStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


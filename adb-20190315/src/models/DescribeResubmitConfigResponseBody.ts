// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeResubmitConfigResponseBodyRules } from "./DescribeResubmitConfigResponseBodyRules";


export class DescribeResubmitConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * @example
   * am-8vbyw9awuj141haf9
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D217417-BBA7-566C-9B9D-FFCBC86112B0
   */
  requestId?: string;
  /**
   * @remarks
   * The job resubmission rules.
   */
  rules?: DescribeResubmitConfigResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': DescribeResubmitConfigResponseBodyRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


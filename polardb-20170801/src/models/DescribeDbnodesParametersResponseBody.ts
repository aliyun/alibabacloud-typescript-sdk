// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBNodesParametersResponseBodyDBNodeIds } from "./DescribeDbnodesParametersResponseBodyDbnodeIds";


export class DescribeDBNodesParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the nodes.
   */
  DBNodeIds?: DescribeDBNodesParametersResponseBodyDBNodeIds[];
  /**
   * @remarks
   * The type of the database engine. Set the value to **MySQL**.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the MySQL database engine. Valid values:
   * 
   * *   **5.6**
   * *   **5.7**
   * *   **8.0**
   * 
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @remarks
   * The cluster engine.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9B7BFB11-C077-4FE3-B051-F69CEB******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeIds: 'DBNodeIds',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      engine: 'Engine',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeIds: { 'type': 'array', 'itemType': DescribeDBNodesParametersResponseBodyDBNodeIds },
      DBType: 'string',
      DBVersion: 'string',
      engine: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeIds)) {
      $dara.Model.validateArray(this.DBNodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


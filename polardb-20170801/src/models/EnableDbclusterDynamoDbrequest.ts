// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableDBClusterDynamoDBRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query information about all clusters in the target region, including cluster IDs. Usage notes: Engine constraints that explicitly list the DBType and DBVersion ranges supporting the DynamoDB compatibility feature (such as Oracle 14+).
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


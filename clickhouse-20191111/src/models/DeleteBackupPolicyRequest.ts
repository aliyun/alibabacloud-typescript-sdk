// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * A client token used to ensure the idempotence of the request. The value must be a string that contains a maximum of 64 ASCII characters and cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query information about all clusters in the destination region, including cluster IDs.
   * 
   * @example
   * cc-bp1t9lbb7a4z7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of records to return on each page. Valid values: 1 to **100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * clickhouse
   */
  product?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      maxResults: 'MaxResults',
      product: 'Product',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      maxResults: 'number',
      product: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


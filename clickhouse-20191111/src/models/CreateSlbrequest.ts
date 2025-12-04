// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSLBRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to obtain the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-uf6bnitmve5n0****
   */
  DBClusterId?: string;
  product?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      product: 'Product',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterEncryptionKeyRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request.
   * 
   * @example
   * 6000170000591aed949d0f******************
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html)Operation to query the details of all clusters in your account, including cluster IDs.
   * 
   * @example
   * pc-***
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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


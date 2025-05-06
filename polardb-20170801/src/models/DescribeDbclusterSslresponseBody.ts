// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterSSLResponseBodyItems } from "./DescribeDbclusterSslresponseBodyItems";


export class DescribeDBClusterSSLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of SSL connections.
   */
  items?: DescribeDBClusterSSLResponseBodyItems[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C890995A-CF06-4F4D-8DB8-DD26C2******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether automatic rotation of SSL certificates is enabled. Valid values:
   * 
   * *   **Enable**: The feature is enabled.
   * *   **Disable**: The feature is disabled.
   * 
   * > This parameter is valid only for a PolarDB for MySQL cluster.
   * 
   * @example
   * Enable
   */
  SSLAutoRotate?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
      SSLAutoRotate: 'SSLAutoRotate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBClusterSSLResponseBodyItems },
      requestId: 'string',
      SSLAutoRotate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


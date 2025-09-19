// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridProxyLinkedClientListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the proxy cluster. You can query the name of the proxy cluster in the Security Center console.
   * 
   * @example
   * office-proxy
   */
  clusterName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The UUID of the proxy node. You can call the DescribeHybridProxyList operation to query the UUID of the proxy node.
   * 
   * @example
   * inet-proxy-3bb11fad-37d6-4aee-9c37-b0ad1612XXXX
   */
  proxyUuid?: string;
  /**
   * @remarks
   * The description of the proxy cluster.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The UUID of the server on which the Security Center agent is installed. You can query the UUID by querying asset information.
   * 
   * @example
   * 80d2f7d6-31a9-4d7f-8ff4-7ecc42f89ca****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      proxyUuid: 'ProxyUuid',
      remark: 'Remark',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      currentPage: 'number',
      pageSize: 'number',
      proxyUuid: 'string',
      remark: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


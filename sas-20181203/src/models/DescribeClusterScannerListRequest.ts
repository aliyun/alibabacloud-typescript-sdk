// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterScannerListRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cluster IDs.
   * 
   * You must specify at least one of StatusList and ClusterIdList. If neither is specified, the API returns HTTP 400 with the error code InvalidParam.
   * 
   * Before calling this operation, make sure that an ACK cluster exists. You can obtain the cluster ID by calling the [DescribeClusters](https://api.aliyun.com/document/CS/2015-12-15/DescribeClusters) operation of Container Service.
   */
  clusterIdList?: string[];
  /**
   * @remarks
   * The language type for the request and response messages.
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The list of scanner statuses. Valid values:
   * - **online**: Running.
   * - **offline**: Offline.
   * - **not_installed**: Not installed.
   * 
   * You must specify at least one of StatusList and ClusterIdList. If neither is specified, the API returns HTTP 400 with the error code InvalidParam.
   */
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterIdList: 'ClusterIdList',
      lang: 'Lang',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIdList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clusterIdList)) {
      $dara.Model.validateArray(this.clusterIdList);
    }
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


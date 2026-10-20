// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterScannerListRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cluster IDs.
   * 
   * You must specify at least one of StatusList and ClusterIdList. If neither is specified, the API returns HTTP 400 with the error code InvalidParam.
   * 
   * An ACK container cluster must exist before the call. You can obtain cluster IDs by calling the [DescribeClusters](https://api.aliyun.com/document/CS/2015-12-15/DescribeClusters) operation of Container Service.
   */
  clusterIdList?: string[];
  /**
   * @remarks
   * The language of the request and response.
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
   * - **online**: Running
   * - **offline**: Offline
   * - **not_installed**: Not installed
   * 
   * You must specify at least one of StatusList and ClusterIdList. If neither is specified, the API returns HTTP 400 with the error code InvalidParam.
   * 
   * If you specify a value other than online, offline, or not_installed, the service does not return a parameter validation error. Instead, it returns an empty list.
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


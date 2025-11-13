// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterScannerListRequest extends $dara.Model {
  clusterIdList?: string[];
  /**
   * @example
   * zh
   */
  lang?: string;
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


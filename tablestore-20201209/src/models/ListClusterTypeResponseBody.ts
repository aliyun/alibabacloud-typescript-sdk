// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterTypeResponseBodyClusterTypeDetailList extends $dara.Model {
  /**
   * @example
   * SSD
   */
  clusterType?: string;
  /**
   * @example
   * true
   */
  isMultiAZ?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      isMultiAZ: 'IsMultiAZ',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      isMultiAZ: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTypeResponseBody extends $dara.Model {
  clusterTypeDetailList?: ListClusterTypeResponseBodyClusterTypeDetailList[];
  clusterTypeList?: string[];
  /**
   * @example
   * 88BA193C-4918-08C4-9870-E1FE6BBECF34
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterTypeDetailList: 'ClusterTypeDetailList',
      clusterTypeList: 'ClusterTypeList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTypeDetailList: { 'type': 'array', 'itemType': ListClusterTypeResponseBodyClusterTypeDetailList },
      clusterTypeList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterTypeDetailList)) {
      $dara.Model.validateArray(this.clusterTypeDetailList);
    }
    if(Array.isArray(this.clusterTypeList)) {
      $dara.Model.validateArray(this.clusterTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


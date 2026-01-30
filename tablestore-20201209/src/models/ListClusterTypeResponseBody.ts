// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterTypeResponseBodyClusterTypeInfos extends $dara.Model {
  /**
   * @example
   * SSD
   */
  clusterType?: string;
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
  clusterTypeInfos?: ListClusterTypeResponseBodyClusterTypeInfos[];
  clusterTypes?: string[];
  /**
   * @example
   * 88BA193C-4918-08C4-9870-E1FE6BBECF34
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterTypeInfos: 'ClusterTypeInfos',
      clusterTypes: 'ClusterTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterTypeInfos: { 'type': 'array', 'itemType': ListClusterTypeResponseBodyClusterTypeInfos },
      clusterTypes: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterTypeInfos)) {
      $dara.Model.validateArray(this.clusterTypeInfos);
    }
    if(Array.isArray(this.clusterTypes)) {
      $dara.Model.validateArray(this.clusterTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


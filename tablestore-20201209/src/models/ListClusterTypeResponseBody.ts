// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterTypeResponseBodyClusterTypeInfos extends $dara.Model {
  /**
   * @remarks
   * The cluster type.
   * 
   * - HYBRID: Capacity.
   * 
   * - SSD: Performance.
   * 
   * @example
   * SSD
   */
  clusterType?: string;
  /**
   * @remarks
   * Indicates whether the cluster supports deployment in multiple availability zones (AZs).
   * 
   * - true: The cluster supports multi-zone deployment and provides zone-redundant storage.
   * 
   * - false: The cluster does not support multi-zone deployment and provides locally redundant storage.
   * 
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
  /**
   * @remarks
   * A list of the detailed information about the cluster types.
   */
  clusterTypeInfos?: ListClusterTypeResponseBodyClusterTypeInfos[];
  /**
   * @remarks
   * A list of cluster types.
   */
  clusterTypes?: string[];
  /**
   * @remarks
   * The request ID. Use this ID to troubleshoot issues.
   * 
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


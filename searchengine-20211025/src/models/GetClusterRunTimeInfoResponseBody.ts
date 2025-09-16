// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterRunTimeInfoResponseBodyResultDataNodesConfigStatusList extends $dara.Model {
  /**
   * @remarks
   * The time when the configuration was last updated.
   * 
   * @example
   * ""
   */
  configUpdateTime?: string;
  /**
   * @remarks
   * The configuration progress. Unit: percentage.
   * 
   * @example
   * 100
   */
  donePercent?: number;
  /**
   * @remarks
   * The number of processed Searcher workers in the cluster.
   * 
   * @example
   * 1
   */
  doneSize?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test_0704
   */
  name?: string;
  /**
   * @remarks
   * The total number of Searcher workers in the cluster.
   * 
   * @example
   * 0
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      configUpdateTime: 'configUpdateTime',
      donePercent: 'donePercent',
      doneSize: 'doneSize',
      name: 'name',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configUpdateTime: 'string',
      donePercent: 'number',
      doneSize: 'number',
      name: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListAdvanceConfigInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the index configuration.
   * 
   * @example
   * index_meta_name
   */
  configMetaName?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      configMetaName: 'configMetaName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMetaName: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListIndexConfigInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the index configuration.
   * 
   * @example
   * index_meta_name
   */
  configMetaName?: string;
  /**
   * @remarks
   * The version of the index template.
   * 
   * @example
   * 1.0.0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      configMetaName: 'configMetaName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMetaName: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusList extends $dara.Model {
  /**
   * @remarks
   * The information about the advanced configuration.
   */
  advanceConfigInfo?: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListAdvanceConfigInfo;
  /**
   * @remarks
   * The name of the worker that failed due to a deployment failure.
   */
  deployFailedWorker?: string[];
  /**
   * @remarks
   * The storage capacity. Unit: GB.
   * 
   * @example
   * 2
   */
  docSize?: number;
  /**
   * @remarks
   * The configuration progress. Unit: percentage.
   * 
   * @example
   * 100
   */
  donePercent?: number;
  /**
   * @remarks
   * The number of processed QRS workers in the cluster.
   * 
   * @example
   * 100
   */
  doneSize?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 0A3B1C48006A6C0905F6375F4821EB50
   */
  errorMsg?: string;
  /**
   * @remarks
   * The time when full data in the index was last updated.
   * 
   * @example
   * " "
   */
  fullUpdateTime?: string;
  /**
   * @remarks
   * The time when the full index version was generated.
   * 
   * @example
   * 123423
   */
  fullVersion?: number;
  /**
   * @remarks
   * The time when incremental data in the index was last updated.
   * 
   * @example
   * ""
   */
  incUpdateTime?: string;
  /**
   * @remarks
   * The time when the incremental index version was generated.
   * 
   * @example
   * 123423
   */
  incVersion?: number;
  /**
   * @remarks
   * The information about the index configuration.
   */
  indexConfigInfo?: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListIndexConfigInfo;
  /**
   * @remarks
   * The index size.
   * 
   * @example
   * 100
   */
  indexSize?: number;
  /**
   * @remarks
   * The name of the worker that failed due to insufficient disks.
   */
  lackDiskWorker?: string[];
  /**
   * @remarks
   * The name of the worker that failed due to insufficient memory.
   */
  lackMemWorker?: string[];
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * ha-cn-c4d2rq7nt04_qrs
   */
  name?: string;
  /**
   * @remarks
   * The total number of QRS workers in the cluster.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      advanceConfigInfo: 'advanceConfigInfo',
      deployFailedWorker: 'deployFailedWorker',
      docSize: 'docSize',
      donePercent: 'donePercent',
      doneSize: 'doneSize',
      errorMsg: 'errorMsg',
      fullUpdateTime: 'fullUpdateTime',
      fullVersion: 'fullVersion',
      incUpdateTime: 'incUpdateTime',
      incVersion: 'incVersion',
      indexConfigInfo: 'indexConfigInfo',
      indexSize: 'indexSize',
      lackDiskWorker: 'lackDiskWorker',
      lackMemWorker: 'lackMemWorker',
      name: 'name',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advanceConfigInfo: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListAdvanceConfigInfo,
      deployFailedWorker: { 'type': 'array', 'itemType': 'string' },
      docSize: 'number',
      donePercent: 'number',
      doneSize: 'number',
      errorMsg: 'string',
      fullUpdateTime: 'string',
      fullVersion: 'number',
      incUpdateTime: 'string',
      incVersion: 'number',
      indexConfigInfo: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusListIndexConfigInfo,
      indexSize: 'number',
      lackDiskWorker: { 'type': 'array', 'itemType': 'string' },
      lackMemWorker: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    if(this.advanceConfigInfo && typeof (this.advanceConfigInfo as any).validate === 'function') {
      (this.advanceConfigInfo as any).validate();
    }
    if(Array.isArray(this.deployFailedWorker)) {
      $dara.Model.validateArray(this.deployFailedWorker);
    }
    if(this.indexConfigInfo && typeof (this.indexConfigInfo as any).validate === 'function') {
      (this.indexConfigInfo as any).validate();
    }
    if(Array.isArray(this.lackDiskWorker)) {
      $dara.Model.validateArray(this.lackDiskWorker);
    }
    if(Array.isArray(this.lackMemWorker)) {
      $dara.Model.validateArray(this.lackMemWorker);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodesServiceStatus extends $dara.Model {
  /**
   * @remarks
   * The process progress of QRS workers in the cluster. Unit: percentage.
   * 
   * @example
   * 100
   */
  donePercent?: number;
  /**
   * @remarks
   * The number of processed QRS workers in the cluster.
   * 
   * @example
   * 100
   */
  doneSize?: number;
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * ha-cn-0ju2s170b03_qrs
   */
  name?: string;
  /**
   * @remarks
   * The total number of QRS workers in the cluster.
   * 
   * @example
   * 100
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      donePercent: 'donePercent',
      doneSize: 'doneSize',
      name: 'name',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      donePercent: 'number',
      doneSize: 'number',
      name: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultDataNodes extends $dara.Model {
  /**
   * @remarks
   * The configuration status.
   */
  configStatusList?: GetClusterRunTimeInfoResponseBodyResultDataNodesConfigStatusList[];
  /**
   * @remarks
   * The data of the Searcher worker.
   */
  dataStatusList?: GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusList[];
  /**
   * @remarks
   * The service status of the QRS worker.
   */
  serviceStatus?: GetClusterRunTimeInfoResponseBodyResultDataNodesServiceStatus;
  static names(): { [key: string]: string } {
    return {
      configStatusList: 'configStatusList',
      dataStatusList: 'dataStatusList',
      serviceStatus: 'serviceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configStatusList: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResultDataNodesConfigStatusList },
      dataStatusList: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResultDataNodesDataStatusList },
      serviceStatus: GetClusterRunTimeInfoResponseBodyResultDataNodesServiceStatus,
    };
  }

  validate() {
    if(Array.isArray(this.configStatusList)) {
      $dara.Model.validateArray(this.configStatusList);
    }
    if(Array.isArray(this.dataStatusList)) {
      $dara.Model.validateArray(this.dataStatusList);
    }
    if(this.serviceStatus && typeof (this.serviceStatus as any).validate === 'function') {
      (this.serviceStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultQueryNodeConfigStatusList extends $dara.Model {
  /**
   * @remarks
   * The time when the configuration was last updated.
   * 
   * @example
   * " "
   */
  configUpdateTime?: string;
  /**
   * @remarks
   * The process progress of QRS workers in the cluster. Unit: percentage.
   * 
   * @example
   * 100
   */
  donePercent?: number;
  /**
   * @remarks
   * The number of processed QRS workers in the cluster.
   * 
   * @example
   * 100
   */
  doneSize?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ha-cn-zvp2qr1sk01_qrs
   */
  name?: string;
  /**
   * @remarks
   * The total number of QRS workers in the cluster.
   * 
   * @example
   * 6
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      configUpdateTime: 'configUpdateTime',
      donePercent: 'donePercent',
      doneSize: 'doneSize',
      name: 'name',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configUpdateTime: 'string',
      donePercent: 'number',
      doneSize: 'number',
      name: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultQueryNodeServiceStatus extends $dara.Model {
  /**
   * @remarks
   * The process progress of QRS workers in the cluster. Unit: percentage.
   * 
   * @example
   * 100
   */
  donePercent?: number;
  /**
   * @remarks
   * The number of processed QRS workers in the cluster.
   * 
   * @example
   * 100
   */
  doneSize?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ha-cn-c4d2rq7nt04_qrs
   */
  name?: string;
  /**
   * @remarks
   * The total number of QRS workers in the cluster.
   * 
   * @example
   * 100
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      donePercent: 'donePercent',
      doneSize: 'doneSize',
      name: 'name',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      donePercent: 'number',
      doneSize: 'number',
      name: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResultQueryNode extends $dara.Model {
  /**
   * @remarks
   * The configuration status.
   */
  configStatusList?: GetClusterRunTimeInfoResponseBodyResultQueryNodeConfigStatusList[];
  /**
   * @remarks
   * The service status of the QRS worker.
   */
  serviceStatus?: GetClusterRunTimeInfoResponseBodyResultQueryNodeServiceStatus;
  static names(): { [key: string]: string } {
    return {
      configStatusList: 'configStatusList',
      serviceStatus: 'serviceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configStatusList: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResultQueryNodeConfigStatusList },
      serviceStatus: GetClusterRunTimeInfoResponseBodyResultQueryNodeServiceStatus,
    };
  }

  validate() {
    if(Array.isArray(this.configStatusList)) {
      $dara.Model.validateArray(this.configStatusList);
    }
    if(this.serviceStatus && typeof (this.serviceStatus as any).validate === 'function') {
      (this.serviceStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * vpc_hz_domain_1
   */
  clusterName?: string;
  /**
   * @remarks
   * The information about the Searcher workers.
   */
  dataNodes?: GetClusterRunTimeInfoResponseBodyResultDataNodes[];
  /**
   * @remarks
   * The information about the Query Result Searcher (QRS) workers.
   */
  queryNode?: GetClusterRunTimeInfoResponseBodyResultQueryNode;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'clusterName',
      dataNodes: 'dataNodes',
      queryNode: 'queryNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      dataNodes: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResultDataNodes },
      queryNode: GetClusterRunTimeInfoResponseBodyResultQueryNode,
    };
  }

  validate() {
    if(Array.isArray(this.dataNodes)) {
      $dara.Model.validateArray(this.dataNodes);
    }
    if(this.queryNode && typeof (this.queryNode as any).validate === 'function') {
      (this.queryNode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRunTimeInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E45380E8-994A-5402-9806-F114B3295FCF
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  result?: GetClusterRunTimeInfoResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetClusterRunTimeInfoResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


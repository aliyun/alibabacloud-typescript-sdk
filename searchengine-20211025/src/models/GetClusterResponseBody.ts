// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterResponseBodyResultDataNode extends $dara.Model {
  /**
   * @remarks
   * The name of the Searcher worker.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of replicas.
   * 
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 2
   */
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      number: 'number',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      number: 'number',
      partition: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyResultQueryNode extends $dara.Model {
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * The number of replicas.
   * 
   * @example
   * 2
   */
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      number: 'number',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      number: 'number',
      partition: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The configuration information.
   */
  config?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The time when the cluster was updated.
   * 
   * @example
   * 2021-08-09 00:01:02
   */
  configUpdateTime?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2024-05-21 16:05:26
   */
  createTime?: string;
  /**
   * @remarks
   * The effective advanced configuration version.
   * 
   * @example
   * test_yyds_data1
   */
  currentAdvanceConfigVersion?: string;
  /**
   * @remarks
   * The effective online configuration version.
   * 
   * @example
   * test_yyds_data1
   */
  currentOnlineConfigVersion?: string;
  /**
   * @remarks
   * The specifications of Searcher workers.
   */
  dataNode?: GetClusterResponseBodyResultDataNode;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * fzz_test
   */
  description?: string;
  /**
   * @remarks
   * The latest advanced configuration version.
   * 
   * @example
   * test_yyds_data1
   */
  latestAdvanceConfigVersion?: string;
  /**
   * @remarks
   * The latest online configuration version.
   * 
   * @example
   * test_yyds_data1
   */
  latestOnlineConfigVersion?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * general
   */
  name?: string;
  /**
   * @remarks
   * The specifications of Query Result Searcher (QRS) workers.
   */
  queryNode?: GetClusterResponseBodyResultQueryNode;
  /**
   * @remarks
   * The creation status of the cluster. Valid values: NEW and PUBLISH. NEW indicates that the cluster is being created. PUBLISH indicates that the cluster is created.
   * 
   * @example
   * NEW
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      configUpdateTime: 'configUpdateTime',
      createTime: 'createTime',
      currentAdvanceConfigVersion: 'currentAdvanceConfigVersion',
      currentOnlineConfigVersion: 'currentOnlineConfigVersion',
      dataNode: 'dataNode',
      description: 'description',
      latestAdvanceConfigVersion: 'latestAdvanceConfigVersion',
      latestOnlineConfigVersion: 'latestOnlineConfigVersion',
      name: 'name',
      queryNode: 'queryNode',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      configUpdateTime: 'string',
      createTime: 'string',
      currentAdvanceConfigVersion: 'string',
      currentOnlineConfigVersion: 'string',
      dataNode: GetClusterResponseBodyResultDataNode,
      description: 'string',
      latestAdvanceConfigVersion: 'string',
      latestOnlineConfigVersion: 'string',
      name: 'string',
      queryNode: GetClusterResponseBodyResultQueryNode,
      status: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.dataNode && typeof (this.dataNode as any).validate === 'function') {
      (this.dataNode as any).validate();
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

export class GetClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The clusters.
   */
  result?: GetClusterResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetClusterResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


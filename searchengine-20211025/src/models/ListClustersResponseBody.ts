// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyResultDataNode extends $dara.Model {
  /**
   * @remarks
   * The name of the Searcher worker.
   * 
   * @example
   * ha-cn-8ed2k7brm05_qrs
   */
  name?: string;
  /**
   * @remarks
   * The number of Searcher workers.
   * 
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * The ID of the partition that is stored on the Searcher worker.
   * 
   * @example
   * dt=20220216
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

export class ListClustersResponseBodyResultQueryNode extends $dara.Model {
  /**
   * @remarks
   * The name of the QRS worker.
   * 
   * @example
   * test_0704
   */
  name?: string;
  /**
   * @remarks
   * The number of QRS workers.
   * 
   * @example
   * 1
   */
  number?: number;
  /**
   * @remarks
   * The ID of the partition that is stored on the QRS worker.
   * 
   * @example
   * dt=20211216
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

export class ListClustersResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The configuration information.
   */
  config?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The time when the configuration was updated.
   * 
   * @example
   * " "
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
   * " "
   */
  currentAdvanceConfigVersion?: string;
  /**
   * @remarks
   * The effective dictionary configuration version.
   * 
   * @example
   * ha-cn-pl32rf0****_offline_adv_v1
   */
  currentOfflineDictConfigVersion?: string;
  /**
   * @remarks
   * The effective online configuration version.
   * 
   * @example
   * " "
   */
  currentOnlineConfigVersion?: string;
  /**
   * @remarks
   * The effective query configuration version.
   * 
   * @example
   * ha-cn-pl32rf0****_offline_adv_v1
   */
  currentOnlineQueryConfigVersion?: string;
  /**
   * @remarks
   * The information about Searcher workers.
   */
  dataNode?: ListClustersResponseBodyResultDataNode;
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
   * " "
   */
  latestAdvanceConfigVersion?: string;
  /**
   * @remarks
   * The latest dictionary configuration version.
   * 
   * @example
   * ha-cn-pl32rf0****_offline_adv_v1
   */
  latestOfflineDictConfigVersion?: string;
  /**
   * @remarks
   * The latest online configuration version.
   * 
   * @example
   * " "
   */
  latestOnlineConfigVersion?: string;
  /**
   * @remarks
   * The latest query configuration version.
   * 
   * @example
   * ha-cn-pl32rf0****_offline_adv_v1
   */
  latestOnlineQueryConfigVersion?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ha-cn-7pp2pcna701_qrs
   */
  name?: string;
  /**
   * @remarks
   * The information about Query Result Searcher (QRS) workers.
   */
  queryNode?: ListClustersResponseBodyResultQueryNode;
  /**
   * @remarks
   * The cluster status. Valid values: running: The cluster is running. starting: The cluster is being started. stopping: The cluster is being stopped. stopped: The cluster is stopped.
   * 
   * @example
   * "starting"
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      configUpdateTime: 'configUpdateTime',
      createTime: 'createTime',
      currentAdvanceConfigVersion: 'currentAdvanceConfigVersion',
      currentOfflineDictConfigVersion: 'currentOfflineDictConfigVersion',
      currentOnlineConfigVersion: 'currentOnlineConfigVersion',
      currentOnlineQueryConfigVersion: 'currentOnlineQueryConfigVersion',
      dataNode: 'dataNode',
      description: 'description',
      latestAdvanceConfigVersion: 'latestAdvanceConfigVersion',
      latestOfflineDictConfigVersion: 'latestOfflineDictConfigVersion',
      latestOnlineConfigVersion: 'latestOnlineConfigVersion',
      latestOnlineQueryConfigVersion: 'latestOnlineQueryConfigVersion',
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
      currentOfflineDictConfigVersion: 'string',
      currentOnlineConfigVersion: 'string',
      currentOnlineQueryConfigVersion: 'string',
      dataNode: ListClustersResponseBodyResultDataNode,
      description: 'string',
      latestAdvanceConfigVersion: 'string',
      latestOfflineDictConfigVersion: 'string',
      latestOnlineConfigVersion: 'string',
      latestOnlineQueryConfigVersion: 'string',
      name: 'string',
      queryNode: ListClustersResponseBodyResultQueryNode,
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

export class ListClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * F43E8AB4-419C-5F4C-90D6-615590DFAA3C
   */
  requestId?: string;
  /**
   * @remarks
   * The clusters.
   */
  result?: ListClustersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListClustersResponseBodyResult },
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


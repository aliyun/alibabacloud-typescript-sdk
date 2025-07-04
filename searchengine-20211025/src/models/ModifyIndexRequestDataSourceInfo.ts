// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyIndexRequestDataSourceInfoConfig } from "./ModifyIndexRequestDataSourceInfoConfig";
import { ModifyIndexRequestDataSourceInfoSaroConfig } from "./ModifyIndexRequestDataSourceInfoSaroConfig";


export class ModifyIndexRequestDataSourceInfo extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic full indexing feature.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The reindexing method. Valid values: api: API data source. indexRecover: data recovery by using indexing.
   * 
   * @example
   * api
   */
  buildMode?: string;
  /**
   * @remarks
   * The configurations of the MaxCompute data source.
   */
  config?: ModifyIndexRequestDataSourceInfoConfig;
  /**
   * @remarks
   * The start timestamp from which incremental data is retrieved.
   * 
   * @example
   * 1709715164
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * The offline deployment name of the data source.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the index version from which data is restored.
   * 
   * @example
   * 4
   */
  generation?: number;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-35t3n1yuj0d_index_1
   */
  name?: string;
  ossDataPath?: string;
  partition?: string;
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently processed.
   * 
   * @example
   * 2
   */
  processParallelNum?: number;
  /**
   * @remarks
   * The number of resources used for data update.
   * 
   * @example
   * 4
   */
  processPartitionCount?: number;
  /**
   * @remarks
   * The configurations of the SARO data source.
   */
  saroConfig?: ModifyIndexRequestDataSourceInfoSaroConfig;
  /**
   * @remarks
   * The type of the data source. Valid values: odps, swift, saro, oss, and unKnow.
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      buildMode: 'buildMode',
      config: 'config',
      dataTimeSec: 'dataTimeSec',
      domain: 'domain',
      generation: 'generation',
      name: 'name',
      ossDataPath: 'ossDataPath',
      partition: 'partition',
      processParallelNum: 'processParallelNum',
      processPartitionCount: 'processPartitionCount',
      saroConfig: 'saroConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      buildMode: 'string',
      config: ModifyIndexRequestDataSourceInfoConfig,
      dataTimeSec: 'number',
      domain: 'string',
      generation: 'number',
      name: 'string',
      ossDataPath: 'string',
      partition: 'string',
      processParallelNum: 'number',
      processPartitionCount: 'number',
      saroConfig: ModifyIndexRequestDataSourceInfoSaroConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.saroConfig && typeof (this.saroConfig as any).validate === 'function') {
      (this.saroConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIndexResponseBodyResultDataSourceInfoConfig } from "./GetIndexResponseBodyResultDataSourceInfoConfig";
import { GetIndexResponseBodyResultDataSourceInfoSaroConfig } from "./GetIndexResponseBodyResultDataSourceInfoSaroConfig";


export class GetIndexResponseBodyResultDataSourceInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the automatic full indexing feature is enabled.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The configuration of MaxCompute data sources.
   */
  config?: GetIndexResponseBodyResultDataSourceInfoConfig;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  name?: string;
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
   * 2
   */
  processPartitionCount?: number;
  /**
   * @remarks
   * The configurations of the SARO data source.
   */
  saroConfig?: GetIndexResponseBodyResultDataSourceInfoSaroConfig;
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
      config: 'config',
      domain: 'domain',
      name: 'name',
      processParallelNum: 'processParallelNum',
      processPartitionCount: 'processPartitionCount',
      saroConfig: 'saroConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: GetIndexResponseBodyResultDataSourceInfoConfig,
      domain: 'string',
      name: 'string',
      processParallelNum: 'number',
      processPartitionCount: 'number',
      saroConfig: GetIndexResponseBodyResultDataSourceInfoSaroConfig,
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


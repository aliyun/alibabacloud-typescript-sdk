// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIndexesResponseBodyResultDataSourceInfoConfig } from "./ListIndexesResponseBodyResultDataSourceInfoConfig";
import { ListIndexesResponseBodyResultDataSourceInfoSaroConfig } from "./ListIndexesResponseBodyResultDataSourceInfoSaroConfig";


export class ListIndexesResponseBodyResultDataSourceInfo extends $dara.Model {
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
  config?: ListIndexesResponseBodyResultDataSourceInfoConfig;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * test
   */
  domain?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * index1
   */
  name?: string;
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
  saroConfig?: ListIndexesResponseBodyResultDataSourceInfoSaroConfig;
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
      processPartitionCount: 'processPartitionCount',
      saroConfig: 'saroConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: ListIndexesResponseBodyResultDataSourceInfoConfig,
      domain: 'string',
      name: 'string',
      processPartitionCount: 'number',
      saroConfig: ListIndexesResponseBodyResultDataSourceInfoSaroConfig,
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


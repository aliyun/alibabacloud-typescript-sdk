// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterOfflineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The reindexing method. Valid values: api: API data source. indexRecover: data recovery by using indexing.
   * 
   * @example
   * indexRecover
   */
  buildMode?: string;
  /**
   * @remarks
   * The configuration name, which is stored as a key.
   */
  config?: { [key: string]: number };
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test1
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The type of the data source. Valid values: odps: MaxCompute. swift: Swift. unKnow: unknown type.
   * 
   * @example
   * maxComputer
   */
  dataSourceType?: string;
  /**
   * @remarks
   * This parameter is required when index building by using API data sources is triggered.
   * 
   * @example
   * 1640867288
   */
  dataTimeSec?: number;
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
   * The ID of the full index version.
   * 
   * @example
   * 160142641
   */
  generation?: number;
  /**
   * @remarks
   * This parameter is required when index building for full data in a MaxCompute data source is triggered.
   * 
   * @example
   * 20211202
   */
  partition?: string;
  /**
   * @remarks
   * The push mode of the configuration. By default, only the configuration is pushed.
   * 
   * @example
   * PUSH_ONLY
   */
  pushMode?: string;
  static names(): { [key: string]: string } {
    return {
      buildMode: 'buildMode',
      config: 'config',
      dataSourceName: 'dataSourceName',
      dataSourceType: 'dataSourceType',
      dataTimeSec: 'dataTimeSec',
      domain: 'domain',
      generation: 'generation',
      partition: 'partition',
      pushMode: 'pushMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildMode: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      dataSourceName: 'string',
      dataSourceType: 'string',
      dataTimeSec: 'number',
      domain: 'string',
      generation: 'number',
      partition: 'string',
      pushMode: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


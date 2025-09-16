// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildIndexRequest extends $dara.Model {
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
   * The name of the data source.
   * 
   * @example
   * my_data_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * swift
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The timestamp in seconds. The value must be of the INTEGER type. This parameter is required if you specify an API data source.
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
   * test
   */
  domain?: string;
  /**
   * @remarks
   * The data restoration version.
   * 
   * @example
   * 160131146
   */
  generation?: number;
  /**
   * @remarks
   * The partition in the MaxCompute table. This parameter is required if type is set to odps.
   * 
   * @example
   * 20201010
   */
  partition?: string;
  path?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      buildMode: 'buildMode',
      dataSourceName: 'dataSourceName',
      dataSourceType: 'dataSourceType',
      dataTimeSec: 'dataTimeSec',
      domain: 'domain',
      generation: 'generation',
      partition: 'partition',
      path: 'path',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildMode: 'string',
      dataSourceName: 'string',
      dataSourceType: 'string',
      dataTimeSec: 'number',
      domain: 'string',
      generation: 'number',
      partition: 'string',
      path: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


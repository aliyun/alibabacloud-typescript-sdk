// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BuildIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The method to rebuild the index. Valid values: api and indexRecover.
   * 
   * @example
   * api
   */
  buildMode?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * odps
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The UNIX timestamp in seconds. This parameter is an integer. This parameter is required if data is pushed to the data source using an API.
   * 
   * @example
   * 1640867288
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * The data center of the data source.
   * 
   * @example
   * sz_vpc_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The backfill ID.
   * 
   * @example
   * 160131146
   */
  generation?: number;
  /**
   * @remarks
   * Required if dataSourceType is set to odps.
   * 
   * @example
   * ds=20201010
   */
  partition?: string;
  /**
   * @remarks
   * The relative path.
   * 
   * @example
   * /test/dir
   */
  path?: string;
  /**
   * @remarks
   * The tag of the Data Lake Formation (DLF) data source.
   * 
   * @example
   * test
   */
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


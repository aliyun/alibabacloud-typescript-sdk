// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableResponseBodyResultDataSourceConfig } from "./GetTableResponseBodyResultDataSourceConfig";


export class GetTableResponseBodyResultDataSource extends $dara.Model {
  /**
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  config?: GetTableResponseBodyResultDataSourceConfig;
  /**
   * @example
   * 1715160176
   */
  dataTimeSec?: number;
  /**
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      config: 'config',
      dataTimeSec: 'dataTimeSec',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: GetTableResponseBodyResultDataSourceConfig,
      dataTimeSec: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


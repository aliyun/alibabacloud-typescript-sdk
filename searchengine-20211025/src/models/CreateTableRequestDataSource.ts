// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTableRequestDataSourceConfig } from "./CreateTableRequestDataSourceConfig";


export class CreateTableRequestDataSource extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically rebuild the index.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The configurations of the data source.
   */
  config?: CreateTableRequestDataSourceConfig;
  /**
   * @remarks
   * The start timestamp from which incremental data is retrieved.
   * 
   * @example
   * 1715160176
   */
  dataTimeSec?: number;
  /**
   * @remarks
   * The data source type. Valid values: odps, swift, and oss.
   * 
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
      config: CreateTableRequestDataSourceConfig,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDownloadJobRequestConfigurationSink } from "./CreateDownloadJobRequestConfigurationSink";


export class CreateDownloadJobRequestConfiguration extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  allowInComplete?: boolean;
  /**
   * @remarks
   * 起点时间戳（精确到秒）
   * 
   * This parameter is required.
   * 
   * @example
   * 1722406260
   */
  fromTime?: number;
  /**
   * @remarks
   * 源logstore
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * 是否启用powerSql
   * 
   * @example
   * true
   */
  powerSql?: boolean;
  /**
   * @remarks
   * 查询语句
   * 
   * This parameter is required.
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * 导出配置
   * 
   * This parameter is required.
   */
  sink?: CreateDownloadJobRequestConfigurationSink;
  /**
   * @remarks
   * 结束时间戳（精确到秒）
   * 
   * This parameter is required.
   * 
   * @example
   * 1722409860
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      allowInComplete: 'allowInComplete',
      fromTime: 'fromTime',
      logstore: 'logstore',
      powerSql: 'powerSql',
      query: 'query',
      sink: 'sink',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowInComplete: 'boolean',
      fromTime: 'number',
      logstore: 'string',
      powerSql: 'boolean',
      query: 'string',
      sink: CreateDownloadJobRequestConfigurationSink,
      toTime: 'number',
    };
  }

  validate() {
    if(this.sink && typeof (this.sink as any).validate === 'function') {
      (this.sink as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDownloadJobResponseBodyConfigurationSink } from "./GetDownloadJobResponseBodyConfigurationSink";


export class GetDownloadJobResponseBodyConfiguration extends $dara.Model {
  /**
   * @example
   * true
   */
  allowInComplete?: boolean;
  /**
   * @remarks
   * 起点时间戳（精确到秒）
   * 
   * @example
   * 1722409860
   */
  fromTime?: number;
  /**
   * @remarks
   * 源logstore
   * 
   * @example
   * ali-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * 是否启用powerSql
   * 
   * @example
   * false
   */
  powerSql?: boolean;
  /**
   * @remarks
   * 查询语句
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * 导出配置
   */
  sink?: GetDownloadJobResponseBodyConfigurationSink;
  /**
   * @remarks
   * 结束时间戳（精确到秒）
   * 
   * @example
   * 1722411060
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
      sink: GetDownloadJobResponseBodyConfigurationSink,
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


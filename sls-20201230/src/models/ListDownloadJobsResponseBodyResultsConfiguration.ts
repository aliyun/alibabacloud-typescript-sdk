// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDownloadJobsResponseBodyResultsConfigurationSink } from "./ListDownloadJobsResponseBodyResultsConfigurationSink";


export class ListDownloadJobsResponseBodyResultsConfiguration extends $dara.Model {
  /**
   * @example
   * false
   */
  allowInComplete?: string;
  /**
   * @remarks
   * 起点时间戳（精确到秒）
   * 
   * @example
   * 1722409260
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
   * true
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
  sink?: ListDownloadJobsResponseBodyResultsConfigurationSink;
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
      allowInComplete: 'string',
      fromTime: 'number',
      logstore: 'string',
      powerSql: 'boolean',
      query: 'string',
      sink: ListDownloadJobsResponseBodyResultsConfigurationSink,
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


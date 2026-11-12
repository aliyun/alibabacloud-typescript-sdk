// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrometheusInstanceStoreConfig extends $dara.Model {
  /**
   * @remarks
   * The concurrency per host. Valid values: 1 to 8. Default value: 2.
   * 
   * @example
   * 2
   */
  parallelCountPerHost?: number;
  /**
   * @remarks
   * Specifies whether to enable parallel query. If not returned, the value is considered false.
   * 
   * @example
   * false
   */
  parallelEnable?: boolean;
  /**
   * @remarks
   * The parallel query mode. Valid values: auto, static. Default value: auto.
   * 
   * @example
   * static
   */
  parallelMode?: string;
  /**
   * @remarks
   * Specifies whether to enable the query cache. If not returned, the value is considered false.
   * 
   * @example
   * false
   */
  queryCacheEnable?: boolean;
  /**
   * @remarks
   * The global concurrency. Valid values: 2 to 64. Default value: 8.
   * 
   * @example
   * 8
   */
  totalParallelCount?: number;
  static names(): { [key: string]: string } {
    return {
      parallelCountPerHost: 'parallelCountPerHost',
      parallelEnable: 'parallelEnable',
      parallelMode: 'parallelMode',
      queryCacheEnable: 'queryCacheEnable',
      totalParallelCount: 'totalParallelCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parallelCountPerHost: 'number',
      parallelEnable: 'boolean',
      parallelMode: 'string',
      queryCacheEnable: 'boolean',
      totalParallelCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


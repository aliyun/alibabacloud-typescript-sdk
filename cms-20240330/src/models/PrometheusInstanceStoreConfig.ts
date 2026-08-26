// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrometheusInstanceStoreConfig extends $dara.Model {
  /**
   * @remarks
   * The concurrency per host. If this parameter is not specified, the default value is 2. Valid values: 1 to 8.
   * 
   * @example
   * 2
   */
  parallelCountPerHost?: number;
  /**
   * @remarks
   * Specifies whether to enable parallel query. If this parameter is not specified, the value is considered as false.
   */
  parallelEnable?: boolean;
  /**
   * @remarks
   * The parallel query mode. Valid values:
   * 
   * - auto
   * - static
   * 
   * If this parameter is not specified, the default value is auto.
   * 
   * @example
   * static
   */
  parallelMode?: string;
  /**
   * @remarks
   * Specifies whether to enable query cache. If this parameter is not specified, the value is considered as false.
   */
  queryCacheEnable?: boolean;
  /**
   * @remarks
   * The global concurrency. If this parameter is not specified, the default value is 8. Valid values: 2 to 64.
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


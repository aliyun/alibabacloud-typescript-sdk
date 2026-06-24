// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeXpackMonitorConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether X-Pack monitoring is enabled. Valid values:
   * - true: enabled.
   * - false: not enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  endpoints?: string[];
  /**
   * @remarks
   * The instance ID of the Elasticsearch instance associated with X-Pack monitoring.
   * 
   * @example
   * es-cn-n6w1o1x0w001c****
   */
  esInstanceId?: string;
  pipelineIds?: string[];
  /**
   * @remarks
   * The username used to access the Elasticsearch instance associated with X-Pack monitoring.
   * 
   * @example
   * elastic
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      endpoints: 'endpoints',
      esInstanceId: 'esInstanceId',
      pipelineIds: 'pipelineIds',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      endpoints: { 'type': 'array', 'itemType': 'string' },
      esInstanceId: 'string',
      pipelineIds: { 'type': 'array', 'itemType': 'string' },
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(Array.isArray(this.pipelineIds)) {
      $dara.Model.validateArray(this.pipelineIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeXpackMonitorConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: DescribeXpackMonitorConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeXpackMonitorConfigResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


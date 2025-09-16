// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the index is effective online.
   * 
   * @example
   * 1
   */
  active?: boolean;
  /**
   * @remarks
   * The number of data replicas.
   * 
   * @example
   * 2
   */
  dataDuplicateNumber?: number;
  /**
   * @remarks
   * The number of data shards.
   * 
   * @example
   * 2
   */
  dataFragmentNumber?: number;
  /**
   * @remarks
   * The traffic percentage.
   * 
   * @example
   * 0
   */
  flowRatio?: number;
  /**
   * @remarks
   * The minimum service ratio.
   * 
   * @example
   * 100
   */
  minServicePercent?: number;
  /**
   * @remarks
   * Indicates whether the cluster is mounted.
   * 
   * @example
   * true
   */
  published?: boolean;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      dataDuplicateNumber: 'dataDuplicateNumber',
      dataFragmentNumber: 'dataFragmentNumber',
      flowRatio: 'flowRatio',
      minServicePercent: 'minServicePercent',
      published: 'published',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      dataDuplicateNumber: 'number',
      dataFragmentNumber: 'number',
      flowRatio: 'number',
      minServicePercent: 'number',
      published: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The result set.
   */
  result?: GetNodeConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetNodeConfigResponseBodyResult,
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


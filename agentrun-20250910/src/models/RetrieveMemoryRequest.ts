// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveMemoryRequestQuery extends $dara.Model {
  /**
   * @example
   * 10
   */
  memory?: string;
  metadata?: { [key: string]: string };
  /**
   * @example
   * preference
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * uid1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      memory: 'memory',
      metadata: 'metadata',
      namespace: 'namespace',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memory: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      namespace: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveMemoryRequest extends $dara.Model {
  /**
   * @example
   * 1756431013
   */
  from?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  query?: RetrieveMemoryRequestQuery;
  /**
   * @example
   * memory
   */
  store?: string;
  /**
   * @example
   * 1737856802
   */
  to?: number;
  /**
   * @example
   * 10
   */
  topk?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      query: 'query',
      store: 'store',
      to: 'to',
      topk: 'topk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      query: RetrieveMemoryRequestQuery,
      store: 'string',
      to: 'number',
      topk: 'number',
    };
  }

  validate() {
    if(this.query && typeof (this.query as any).validate === 'function') {
      (this.query as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


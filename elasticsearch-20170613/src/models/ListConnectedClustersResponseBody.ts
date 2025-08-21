// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectedClustersResponseBodyResultResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the remote instance that is connected to the network of the current instance.
   * 
   * @example
   * es-cn-09k1rocex0006****
   */
  instances?: string;
  /**
   * @remarks
   * The network type of the instance.
   * 
   * @example
   * vpc
   */
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
      networkType: 'networkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: 'string',
      networkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectedClustersResponseBodyResult extends $dara.Model {
  result?: ListConnectedClustersResponseBodyResultResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListConnectedClustersResponseBodyResultResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectedClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * The return results.
   */
  result?: ListConnectedClustersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListConnectedClustersResponseBodyResult,
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


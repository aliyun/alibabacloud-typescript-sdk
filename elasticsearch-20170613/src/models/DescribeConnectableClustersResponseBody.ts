// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConnectableClustersResponseBodyResult extends $dara.Model {
  /**
   * @example
   * es-cn-xxx
   */
  instances?: string;
  /**
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

export class DescribeConnectableClustersResponseBody extends $dara.Model {
  /**
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  result?: DescribeConnectableClustersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeConnectableClustersResponseBodyResult },
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


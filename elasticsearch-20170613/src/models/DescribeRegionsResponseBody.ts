// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * https://elasticsearch-cn-hangzhou.console.aliyun.com
   */
  consoleEndpoint?: string;
  /**
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @example
   * elasticsearch.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The endpoint of the region that is exposed in the console.
   * 
   * @example
   * available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      consoleEndpoint: 'consoleEndpoint',
      localName: 'localName',
      regionEndpoint: 'regionEndpoint',
      regionId: 'regionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleEndpoint: 'string',
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The available status of the region.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1ADFG
   */
  requestId?: string;
  /**
   * @remarks
   * The endpoint of the region.
   */
  result?: DescribeRegionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyResult },
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


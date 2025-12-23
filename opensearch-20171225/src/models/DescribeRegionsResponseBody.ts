// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The console URL.
   * 
   * @example
   * https://opensearch-cn-hangzhou.console.aliyun.com
   */
  consoleUrl?: string;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * opensearch.cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      consoleUrl: 'consoleUrl',
      endpoint: 'endpoint',
      localName: 'localName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleUrl: 'string',
      endpoint: 'string',
      localName: 'string',
      regionId: 'string',
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
   * The request ID.
   * 
   * @example
   * 3B7E42BD-1D63-2F6B-C8E0-41BACEA76EEB
   */
  requestId?: string;
  /**
   * @remarks
   * The results returned.
   */
  result?: DescribeRegionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
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


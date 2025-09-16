// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The endpoint of the region.
   * 
   * @example
   * endpoint
   */
  endpoint?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the region. Valid values:
   * 
   * cn-hangzhou: China (Hangzhou)
   * 
   * cn-shanghai: China (Shanghai)
   * 
   * cn-qingdao: China (Qingdao)
   * 
   * cn-beijing: China (Beijing)
   * 
   * cn-zhangjiakou: China (Zhangjiakou)
   * 
   * cn-shenzhen: China (Shenzhen)
   * 
   * ap-southeast-1: Singapore (Singapore)
   * 
   * cn-internal: Internal Center
   * 
   * cn-zhangbei-in: Internal Center (Zhangjiakou)
   * 
   * us-west-1-in: Internal Center (US)
   * 
   * rus-west-1-in: Internal Center (Russia)
   * 
   * cn-daily: Daily Environment
   * 
   * cn-test: Joint Debugging
   * 
   * pre-hangzhou: China (Hangzhou)-Staging
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      localName: 'localName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * id of request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
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


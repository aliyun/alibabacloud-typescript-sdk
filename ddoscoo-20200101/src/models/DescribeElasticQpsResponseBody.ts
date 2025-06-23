// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticQpsResponseBodyElasticQps } from "./DescribeElasticQpsResponseBodyElasticQps";


export class DescribeElasticQpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the burstable QPS.
   */
  elasticQps?: DescribeElasticQpsResponseBodyElasticQps[];
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 2E7F7F7B-39A8-5D92-BAB4-D89D9DCE7D4F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticQps: 'ElasticQps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticQps: { 'type': 'array', 'itemType': DescribeElasticQpsResponseBodyElasticQps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elasticQps)) {
      $dara.Model.validateArray(this.elasticQps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticQpsRecordResponseBodyElasticQpsList } from "./DescribeElasticQpsRecordResponseBodyElasticQpsList";


export class DescribeElasticQpsRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The QPS information about the instance.
   */
  elasticQpsList?: DescribeElasticQpsRecordResponseBodyElasticQpsList[];
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F68B34E2-570C-508D-95FD-DFB6611D518F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticQpsList: 'ElasticQpsList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticQpsList: { 'type': 'array', 'itemType': DescribeElasticQpsRecordResponseBodyElasticQpsList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elasticQpsList)) {
      $dara.Model.validateArray(this.elasticQpsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisecEventDomainStatisticResponseBodyData } from "./DescribeApisecEventDomainStatisticResponseBodyData";


export class DescribeApisecEventDomainStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribeApisecEventDomainStatisticResponseBodyData[];
  /**
   * @remarks
   * Id of the request.
   * 
   * @example
   * 66A98669-*******-80A6-3014697B11AE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecEventDomainStatisticResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


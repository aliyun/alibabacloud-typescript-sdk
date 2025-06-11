// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodeMetricsResponseBody extends $dara.Model {
  /**
   * @example
   * -
   */
  nodeMetrics?: string;
  /**
   * @remarks
   * You can call this operation to query the detailed metrics information of an OceanBase Database node.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * ```
   * http(s)://[Endpoint]/?Action=DescribeNodeMetrics
   * &InstanceId=ob317v4uif****
   * &PageSize=10
   * &PageNumber=1
   * &TenantId=ob2mr3oae0****
   * &StartTime=2021-06-13 15:40:43
   * &EndTime=2021-09-13 15:40:43
   * &Metrics=tps
   * &NodeName=i-bp16niirq4zdmgvm****
   * &NodeIdList=["i-bp19y05uq6xpacyqnlrc","i-bp1blcr3htr3g3u2vqvu","i-bp1392ikhayhr3hi4fli"]
   * &Common request parameters
   * ```
   * 
   * @example
   * 9
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodeMetrics: 'NodeMetrics',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeMetrics: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


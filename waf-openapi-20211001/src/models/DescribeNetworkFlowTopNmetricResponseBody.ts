// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkFlowTopNMetricResponseBodyNetworkFlowTopNValues } from "./DescribeNetworkFlowTopNmetricResponseBodyNetworkFlowTopNvalues";
import { DescribeNetworkFlowTopNMetricResponseBodyTopNMetaData } from "./DescribeNetworkFlowTopNmetricResponseBodyTopNmetaData";


export class DescribeNetworkFlowTopNMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The top statistical data array returned.
   */
  networkFlowTopNValues?: DescribeNetworkFlowTopNMetricResponseBodyNetworkFlowTopNValues[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-D33C8B4C7726
   */
  requestId?: string;
  /**
   * @remarks
   * The metadata of the returned data.
   */
  topNMetaData?: DescribeNetworkFlowTopNMetricResponseBodyTopNMetaData;
  static names(): { [key: string]: string } {
    return {
      networkFlowTopNValues: 'NetworkFlowTopNValues',
      requestId: 'RequestId',
      topNMetaData: 'TopNMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkFlowTopNValues: { 'type': 'array', 'itemType': DescribeNetworkFlowTopNMetricResponseBodyNetworkFlowTopNValues },
      requestId: 'string',
      topNMetaData: DescribeNetworkFlowTopNMetricResponseBodyTopNMetaData,
    };
  }

  validate() {
    if(Array.isArray(this.networkFlowTopNValues)) {
      $dara.Model.validateArray(this.networkFlowTopNValues);
    }
    if(this.topNMetaData && typeof (this.topNMetaData as any).validate === 'function') {
      (this.topNMetaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


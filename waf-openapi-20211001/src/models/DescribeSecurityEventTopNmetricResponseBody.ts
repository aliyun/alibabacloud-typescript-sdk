// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityEventTopNMetricResponseBodySecurityEventTopNValues } from "./DescribeSecurityEventTopNmetricResponseBodySecurityEventTopNvalues";
import { DescribeSecurityEventTopNMetricResponseBodyTopNMetaData } from "./DescribeSecurityEventTopNmetricResponseBodyTopNmetaData";


export class DescribeSecurityEventTopNMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-*****B4C7726
   */
  requestId?: string;
  /**
   * @remarks
   * The top N data entries returned.
   */
  securityEventTopNValues?: DescribeSecurityEventTopNMetricResponseBodySecurityEventTopNValues[];
  /**
   * @remarks
   * The metadata of the data entries returned.
   */
  topNMetaData?: DescribeSecurityEventTopNMetricResponseBodyTopNMetaData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventTopNValues: 'SecurityEventTopNValues',
      topNMetaData: 'TopNMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventTopNValues: { 'type': 'array', 'itemType': DescribeSecurityEventTopNMetricResponseBodySecurityEventTopNValues },
      topNMetaData: DescribeSecurityEventTopNMetricResponseBodyTopNMetaData,
    };
  }

  validate() {
    if(Array.isArray(this.securityEventTopNValues)) {
      $dara.Model.validateArray(this.securityEventTopNValues);
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


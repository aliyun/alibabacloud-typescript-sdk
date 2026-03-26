// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInsightTypesResponseBody extends $dara.Model {
  /**
   * @example
   * {\\"ApiCallRateInsight\\": \\"Enable\\", \\"ApiErrorRateInsight\\": \\"Enable\\", \\"IpInsight\\": \\"Enable\\", \\"AkInsight\\": \\"Enable\\"}
   */
  insightTypes?: { [key: string]: any };
  /**
   * @example
   * EC4A1F64-4927-5714-B205-5A0B16A2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      insightTypes: 'InsightTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insightTypes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.insightTypes) {
      $dara.Model.validateMap(this.insightTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


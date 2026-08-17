// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFlinkAiServiceFreeQuotaResponseBodyFlinkAiFreeQuotaDTOUsedQuotaDetails extends $dara.Model {
  /**
   * @remarks
   * The used quota for this usage type.
   * 
   * @example
   * 35.5
   */
  amount?: number;
  /**
   * @remarks
   * The usage type.
   * 
   * @example
   * AI_FUNCTION
   */
  usageType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      usageType: 'UsageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      usageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlinkAiServiceFreeQuotaResponseBodyFlinkAiFreeQuotaDTO extends $dara.Model {
  /**
   * @remarks
   * The total free quota.
   * 
   * @example
   * 100
   */
  freeQuota?: number;
  /**
   * @remarks
   * The list of used quota details for each usage type.
   */
  usedQuotaDetails?: GetFlinkAiServiceFreeQuotaResponseBodyFlinkAiFreeQuotaDTOUsedQuotaDetails[];
  static names(): { [key: string]: string } {
    return {
      freeQuota: 'FreeQuota',
      usedQuotaDetails: 'UsedQuotaDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeQuota: 'number',
      usedQuotaDetails: { 'type': 'array', 'itemType': GetFlinkAiServiceFreeQuotaResponseBodyFlinkAiFreeQuotaDTOUsedQuotaDetails },
    };
  }

  validate() {
    if(Array.isArray(this.usedQuotaDetails)) {
      $dara.Model.validateArray(this.usedQuotaDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlinkAiServiceFreeQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Flink AI free quota data transfer object.
   */
  flinkAiFreeQuotaDTO?: GetFlinkAiServiceFreeQuotaResponseBodyFlinkAiFreeQuotaDTO;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8DF2A5B-6FBA-5651-A3D4-960F3664****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      flinkAiFreeQuotaDTO: 'FlinkAiFreeQuotaDTO',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flinkAiFreeQuotaDTO: GetFlinkAiServiceFreeQuotaResponseBodyFlinkAiFreeQuotaDTO,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.flinkAiFreeQuotaDTO && typeof (this.flinkAiFreeQuotaDTO as any).validate === 'function') {
      (this.flinkAiFreeQuotaDTO as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


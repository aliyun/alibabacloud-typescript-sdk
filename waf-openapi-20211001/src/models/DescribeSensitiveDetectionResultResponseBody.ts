// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveDetectionResultResponseBodyDataResultList extends $dara.Model {
  /**
   * @remarks
   * The number of personal information records.
   * 
   * @example
   * 11
   */
  infoCount?: number;
  /**
   * @remarks
   * The number of sensitive personal information records that are involved in cross-border data transfer.
   * 
   * @example
   * 6
   */
  outboundCount?: number;
  /**
   * @remarks
   * The sensitive data type.
   * 
   * @example
   * 1002
   */
  sensitiveCode?: number;
  static names(): { [key: string]: string } {
    return {
      infoCount: 'InfoCount',
      outboundCount: 'OutboundCount',
      sensitiveCode: 'SensitiveCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoCount: 'number',
      outboundCount: 'number',
      sensitiveCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSensitiveDetectionResultResponseBodyDataResultMax extends $dara.Model {
  /**
   * @remarks
   * The number of sensitive personal information records that are of the most frequent sensitive data type.
   * 
   * @example
   * 187
   */
  infoCount?: number;
  /**
   * @remarks
   * The number of sensitive personal information records that are of the most frequent sensitive data type and are involved in cross-border data transfer.
   * 
   * @example
   * 54
   */
  outboundCount?: number;
  /**
   * @remarks
   * The most frequent sensitive data type.
   * 
   * @example
   * 1003
   */
  sensitiveCode?: number;
  static names(): { [key: string]: string } {
    return {
      infoCount: 'InfoCount',
      outboundCount: 'OutboundCount',
      sensitiveCode: 'SensitiveCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoCount: 'number',
      outboundCount: 'number',
      sensitiveCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSensitiveDetectionResultResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The compliance check results. Valid values:
   * 
   * *   **report**: Risks exist in cross-border data transfer.
   * *   **none**: No risks exist in cross-border data transfer.
   * 
   * @example
   * report
   */
  detectionResult?: string;
  /**
   * @remarks
   * The sensitive information check results by sensitive data type.
   */
  list?: DescribeSensitiveDetectionResultResponseBodyDataResultList[];
  /**
   * @remarks
   * The maximum values in the statistics of sensitive data types.
   */
  max?: DescribeSensitiveDetectionResultResponseBodyDataResultMax;
  static names(): { [key: string]: string } {
    return {
      detectionResult: 'DetectionResult',
      list: 'List',
      max: 'Max',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectionResult: 'string',
      list: { 'type': 'array', 'itemType': DescribeSensitiveDetectionResultResponseBodyDataResultList },
      max: DescribeSensitiveDetectionResultResponseBodyDataResultMax,
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.max && typeof (this.max as any).validate === 'function') {
      (this.max as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSensitiveDetectionResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The compliance checks.
   */
  result?: DescribeSensitiveDetectionResultResponseBodyDataResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': DescribeSensitiveDetectionResultResponseBodyDataResult },
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

export class DescribeSensitiveDetectionResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance check results.
   */
  data?: DescribeSensitiveDetectionResultResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSensitiveDetectionResultResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


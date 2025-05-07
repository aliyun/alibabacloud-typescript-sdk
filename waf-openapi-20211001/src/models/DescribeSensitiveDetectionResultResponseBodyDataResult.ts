// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSensitiveDetectionResultResponseBodyDataResultList } from "./DescribeSensitiveDetectionResultResponseBodyDataResultList";
import { DescribeSensitiveDetectionResultResponseBodyDataResultMax } from "./DescribeSensitiveDetectionResultResponseBodyDataResultMax";


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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileModerationResultResponseBodyDataPageSummaryTextSummaryTextLabels } from "./DescribeFileModerationResultResponseBodyDataPageSummaryTextSummaryTextLabels";


export class DescribeFileModerationResultResponseBodyDataPageSummaryTextSummary extends $dara.Model {
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * Text Label
   */
  textLabels?: DescribeFileModerationResultResponseBodyDataPageSummaryTextSummaryTextLabels[];
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      textLabels: 'TextLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      textLabels: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageSummaryTextSummaryTextLabels },
    };
  }

  validate() {
    if(Array.isArray(this.textLabels)) {
      $dara.Model.validateArray(this.textLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


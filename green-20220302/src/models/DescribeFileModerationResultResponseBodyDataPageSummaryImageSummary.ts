// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileModerationResultResponseBodyDataPageSummaryImageSummaryImageLabels } from "./DescribeFileModerationResultResponseBodyDataPageSummaryImageSummaryImageLabels";


export class DescribeFileModerationResultResponseBodyDataPageSummaryImageSummary extends $dara.Model {
  /**
   * @remarks
   * Image Label
   */
  imageLabels?: DescribeFileModerationResultResponseBodyDataPageSummaryImageSummaryImageLabels[];
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      imageLabels: 'ImageLabels',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageLabels: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageSummaryImageSummaryImageLabels },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageLabels)) {
      $dara.Model.validateArray(this.imageLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


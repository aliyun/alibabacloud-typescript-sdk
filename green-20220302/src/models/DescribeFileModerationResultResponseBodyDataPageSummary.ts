// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileModerationResultResponseBodyDataPageSummaryImageSummary } from "./DescribeFileModerationResultResponseBodyDataPageSummaryImageSummary";
import { DescribeFileModerationResultResponseBodyDataPageSummaryTextSummary } from "./DescribeFileModerationResultResponseBodyDataPageSummaryTextSummary";


export class DescribeFileModerationResultResponseBodyDataPageSummary extends $dara.Model {
  /**
   * @remarks
   * Image Results Summary
   */
  imageSummary?: DescribeFileModerationResultResponseBodyDataPageSummaryImageSummary;
  /**
   * @remarks
   * Number of pages
   * 
   * @example
   * 1
   */
  pageSum?: number;
  /**
   * @remarks
   * Text Results Summary
   */
  textSummary?: DescribeFileModerationResultResponseBodyDataPageSummaryTextSummary;
  static names(): { [key: string]: string } {
    return {
      imageSummary: 'ImageSummary',
      pageSum: 'PageSum',
      textSummary: 'TextSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageSummary: DescribeFileModerationResultResponseBodyDataPageSummaryImageSummary,
      pageSum: 'number',
      textSummary: DescribeFileModerationResultResponseBodyDataPageSummaryTextSummary,
    };
  }

  validate() {
    if(this.imageSummary && typeof (this.imageSummary as any).validate === 'function') {
      (this.imageSummary as any).validate();
    }
    if(this.textSummary && typeof (this.textSummary as any).validate === 'function') {
      (this.textSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


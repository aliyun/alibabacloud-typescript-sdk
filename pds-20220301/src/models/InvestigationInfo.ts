// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvestigationInfoVideoDetailBlockFrames extends $dara.Model {
  /**
   * @remarks
   * Category of review results
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * Time (in seconds)
   * 
   * @example
   * 3
   */
  offset?: number;
  /**
   * @remarks
   * The confidence level. Valid values: 0 to 100.
   * 
   * @example
   * 99.1
   */
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      offset: 'offset',
      rate: 'rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      offset: 'number',
      rate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvestigationInfoVideoDetail extends $dara.Model {
  /**
   * @remarks
   * Violation frame information
   */
  blockFrames?: InvestigationInfoVideoDetailBlockFrames[];
  static names(): { [key: string]: string } {
    return {
      blockFrames: 'block_frames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockFrames: { 'type': 'array', 'itemType': InvestigationInfoVideoDetailBlockFrames },
    };
  }

  validate() {
    if(Array.isArray(this.blockFrames)) {
      $dara.Model.validateArray(this.blockFrames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvestigationInfo extends $dara.Model {
  /**
   * @remarks
   * The status of the review.
   * 
   * Valid values:
   * 
   * *   0: The review is not performed.
   * *   1: The review is not supported.
   * *   2: The review fails.
   * *   3: The review is in progress.
   * *   4: The review is complete.
   * *   5: Penalty methods are applied.
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The recommended operation provided by the review.
   * 
   * Valid values:
   * 
   * *   pass: The review is passed..
   * *   block: The review is not passed. It is recommended to limit the use of the image.
   * 
   * @example
   * block
   */
  suggestion?: string;
  /**
   * @remarks
   * Video review information
   */
  videoDetail?: InvestigationInfoVideoDetail;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      suggestion: 'suggestion',
      videoDetail: 'video_detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      suggestion: 'string',
      videoDetail: InvestigationInfoVideoDetail,
    };
  }

  validate() {
    if(this.videoDetail && typeof (this.videoDetail as any).validate === 'function') {
      (this.videoDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


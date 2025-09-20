// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectImageScoreResponseBodyImageScore extends $dara.Model {
  /**
   * @remarks
   * The overall quality score.
   * 
   * @example
   * 0.6
   */
  overallQualityScore?: number;
  static names(): { [key: string]: string } {
    return {
      overallQualityScore: 'OverallQualityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallQualityScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageScoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quality score of the image.
   */
  imageScore?: DetectImageScoreResponseBodyImageScore;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6E93D6C9-5AC0-49F9-914D-E02678D3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageScore: 'ImageScore',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScore: DetectImageScoreResponseBodyImageScore,
      requestId: 'string',
    };
  }

  validate() {
    if(this.imageScore && typeof (this.imageScore as any).validate === 'function') {
      (this.imageScore as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


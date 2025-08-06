// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaDNAResultResponseBodyDNAResultVideoDNADetailDuplication extends $dara.Model {
  /**
   * @remarks
   * The duration of the video. Unit: seconds.
   * 
   * @example
   * 12.0
   */
  duration?: string;
  /**
   * @remarks
   * The start time of the video. Unit: seconds.
   * 
   * @example
   * 2.0
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBodyDNAResultVideoDNADetailInput extends $dara.Model {
  /**
   * @remarks
   * The duration of the video. Unit: seconds.
   * 
   * @example
   * 12.0
   */
  duration?: string;
  /**
   * @remarks
   * The start time of the video. Unit: seconds.
   * 
   * @example
   * 2.0
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBodyDNAResultVideoDNADetail extends $dara.Model {
  /**
   * @remarks
   * The start time and duration of the matched video.
   */
  duplication?: GetMediaDNAResultResponseBodyDNAResultVideoDNADetailDuplication;
  /**
   * @remarks
   * The start time and duration of the input video.
   */
  input?: GetMediaDNAResultResponseBodyDNAResultVideoDNADetailInput;
  static names(): { [key: string]: string } {
    return {
      duplication: 'Duplication',
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duplication: GetMediaDNAResultResponseBodyDNAResultVideoDNADetailDuplication,
      input: GetMediaDNAResultResponseBodyDNAResultVideoDNADetailInput,
    };
  }

  validate() {
    if(this.duplication && typeof (this.duplication as any).validate === 'function') {
      (this.duplication as any).validate();
    }
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBodyDNAResultVideoDNA extends $dara.Model {
  /**
   * @remarks
   * The details of the matched video. Information such as the location and duration of the video is returned.
   */
  detail?: GetMediaDNAResultResponseBodyDNAResultVideoDNADetail[];
  /**
   * @remarks
   * The ID of the video that has a similar fingerprint.
   * 
   * @example
   * 6ad8987da46f4b*****490ce2873745
   */
  primaryKey?: string;
  /**
   * @remarks
   * The similarity between the fingerprints of the input video and the matched video. 1 indicates that the fingerprints of the two videos are the same.
   * 
   * @example
   * 0.98
   */
  similarity?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      primaryKey: 'PrimaryKey',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': GetMediaDNAResultResponseBodyDNAResultVideoDNADetail },
      primaryKey: 'string',
      similarity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBodyDNAResult extends $dara.Model {
  /**
   * @remarks
   * The video fingerprint recognition result.
   */
  videoDNA?: GetMediaDNAResultResponseBodyDNAResultVideoDNA[];
  static names(): { [key: string]: string } {
    return {
      videoDNA: 'VideoDNA',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoDNA: { 'type': 'array', 'itemType': GetMediaDNAResultResponseBodyDNAResultVideoDNA },
    };
  }

  validate() {
    if(Array.isArray(this.videoDNA)) {
      $dara.Model.validateArray(this.videoDNA);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaDNAResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The media fingerprinting results.
   */
  DNAResult?: GetMediaDNAResultResponseBodyDNAResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 63FC4896-E956-4B*****7D-134FF1BC597A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DNAResult: 'DNAResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNAResult: GetMediaDNAResultResponseBodyDNAResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DNAResult && typeof (this.DNAResult as any).validate === 'function') {
      (this.DNAResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


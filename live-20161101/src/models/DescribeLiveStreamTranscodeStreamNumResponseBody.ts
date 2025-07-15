// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamTranscodeStreamNumResponseBodyTranscodeStreamCountDetails extends $dara.Model {
  /**
   * @remarks
   * The number of streams that use the transcoding template.
   * 
   * @example
   * 30
   */
  count?: number;
  /**
   * @remarks
   * The name of the transcoding template.
   * 
   * @example
   * template_name
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeStreamNumResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of streams for which transcoding is triggered by stream pulling.
   * 
   * @example
   * 10
   */
  lazyTranscodedNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 150191A4-DD88-5941-B48C-9DF59E0A8B1F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of streams.
   * 
   * @example
   * 57
   */
  total?: number;
  /**
   * @remarks
   * The details about the transcoding templates.
   */
  transcodeStreamCountDetails?: DescribeLiveStreamTranscodeStreamNumResponseBodyTranscodeStreamCountDetails[];
  /**
   * @remarks
   * The number of streams that are transcoded.
   * 
   * @example
   * 30
   */
  transcodedNumber?: number;
  /**
   * @remarks
   * The number of streams that are not transcoded.
   * 
   * @example
   * 27
   */
  untranscodeNumber?: number;
  static names(): { [key: string]: string } {
    return {
      lazyTranscodedNumber: 'LazyTranscodedNumber',
      requestId: 'RequestId',
      total: 'Total',
      transcodeStreamCountDetails: 'TranscodeStreamCountDetails',
      transcodedNumber: 'TranscodedNumber',
      untranscodeNumber: 'UntranscodeNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lazyTranscodedNumber: 'number',
      requestId: 'string',
      total: 'number',
      transcodeStreamCountDetails: { 'type': 'array', 'itemType': DescribeLiveStreamTranscodeStreamNumResponseBodyTranscodeStreamCountDetails },
      transcodedNumber: 'number',
      untranscodeNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.transcodeStreamCountDetails)) {
      $dara.Model.validateArray(this.transcodeStreamCountDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


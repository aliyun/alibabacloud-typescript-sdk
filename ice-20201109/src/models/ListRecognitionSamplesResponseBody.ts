// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecognitionSamplesResponseBodySamplesSample extends $dara.Model {
  /**
   * @example
   * https://example.com/sample.png
   */
  imageUrl?: string;
  /**
   * @example
   * xxxxxxxxxxxxx
   */
  sampleId?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      sampleId: 'SampleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      sampleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecognitionSamplesResponseBodySamples extends $dara.Model {
  sample?: ListRecognitionSamplesResponseBodySamplesSample[];
  static names(): { [key: string]: string } {
    return {
      sample: 'Sample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sample: { 'type': 'array', 'itemType': ListRecognitionSamplesResponseBodySamplesSample },
    };
  }

  validate() {
    if(Array.isArray(this.sample)) {
      $dara.Model.validateArray(this.sample);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecognitionSamplesResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * xxx-xxxx-xxxxx-xxxx
   */
  requestId?: string;
  samples?: ListRecognitionSamplesResponseBodySamples;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      samples: 'Samples',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      samples: ListRecognitionSamplesResponseBodySamples,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.samples && typeof (this.samples as any).validate === 'function') {
      (this.samples as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


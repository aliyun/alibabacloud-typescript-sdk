// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecognitionSamplesResponseBodySamplesSample extends $dara.Model {
  entityId?: string;
  /**
   * @remarks
   * The URL of the image sample.
   * 
   * @example
   * https://example.com/sample.png
   */
  imageUrl?: string;
  libId?: string;
  /**
   * @remarks
   * The sample ID.
   * 
   * @example
   * xxxxxxxxxxxxx
   */
  sampleId?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      imageUrl: 'ImageUrl',
      libId: 'LibId',
      sampleId: 'SampleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      imageUrl: 'string',
      libId: 'string',
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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * xxx-xxxx-xxxxx-xxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The samples.
   */
  samples?: ListRecognitionSamplesResponseBodySamples;
  /**
   * @remarks
   * The total number of samples.
   * 
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


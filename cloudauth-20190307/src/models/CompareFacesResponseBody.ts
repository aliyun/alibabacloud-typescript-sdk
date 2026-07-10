// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareFacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The confidence thresholds for face comparison. The returned content is a JSON object with the structure `"key":"value"`.
   * 
   * - `key` is the false acceptance rate (FAR), which is the probability of incorrectly identifying another person as the specified person.
   * - `value` is the corresponding threshold.
   * 
   * 
   * > About the confidence thresholds (confidenceThresholds) in the example:
   * - `"0.0001": "90.07"` indicates that the corresponding threshold is 90.07 when the FAR is 0.01%.
   * - `"0.001": "80.01"` indicates that the corresponding threshold is 80.01 when the FAR is 0.1%.
   * - `"0.01": "70.02"` indicates that the corresponding threshold is 70.02 when the FAR is 1%.
   * 
   * The confidence thresholds are dynamically generated based on different images and algorithms. Do not persist the confidence thresholds.
   * 
   * @example
   * {"0.0001":"90.07","0.001":"80.01","0.01":"70.02"}
   */
  confidenceThresholds?: string;
  /**
   * @remarks
   * The similarity score between the faces in the two images. Valid values: [0, 100]. A higher value indicates a greater similarity.
   * 
   * @example
   * 98.7913
   */
  similarityScore?: number;
  static names(): { [key: string]: string } {
    return {
      confidenceThresholds: 'ConfidenceThresholds',
      similarityScore: 'SimilarityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidenceThresholds: 'string',
      similarityScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The face comparison result.
   */
  data?: CompareFacesResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Error.InternalError
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CompareFacesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


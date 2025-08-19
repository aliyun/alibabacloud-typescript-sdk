// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareFacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Confidence thresholds for face comparison. The returned content is a JSON Object, with the specific structure being `"key":"value"`.
   * 
   * - `key` represents the false acceptance rate, which is the probability of misidentifying someone else as the specified person.
   * - `value` is the corresponding threshold.
   * 
   * 
   * > Regarding the confidence thresholds (confidenceThresholds) in the example:
   * - `"0.0001": "90.07"` indicates that the threshold is 90.07 when the false acceptance rate is 0.01%.
   * - `"0.001": "80.01"` indicates that the threshold is 80.01 when the false acceptance rate is 0.1%.
   * - `"0.01": "70.02"` indicates that the threshold is 70.02 when the false acceptance rate is 1%.
   * 
   * Confidence thresholds are dynamically provided based on different images and algorithms, so do not persist these thresholds.
   * 
   * @example
   * {"0.0001":"90.07","0.001":"80.01","0.01":"70.02"}
   */
  confidenceThresholds?: string;
  /**
   * @remarks
   * The degree of similarity between the faces in the two images. The value range is [0, 100], with higher values indicating greater similarity.
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
   * HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Result of the face comparison.
   */
  data?: CompareFacesResponseBodyData;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * Error.InternalError
   */
  message?: string;
  /**
   * @remarks
   * ID of the current request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the response was successful.
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


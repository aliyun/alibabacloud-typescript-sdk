// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DetectAigcImageResponseBodyBody extends $dara.Model {
  /**
   * @remarks
   * The confidence level. Value range: 0 to 1. A higher value indicates a higher probability.
   * 
   * @example
   * 0.51
   */
  confidence?: string;
  /**
   * @remarks
   * The detection label. Valid values:
   * - `ai_generated`: AI-generated.
   * - `non_ai_generated`: Not AI-generated.
   * 
   * @example
   * ai_generated
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectAigcImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of AIGC detection result labels.
   */
  body?: DetectAigcImageResponseBodyBody[];
  /**
   * @remarks
   * The business error code. The value `OK` is returned if the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code. The value `200` is returned if the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The additional information. The value `success` is returned if the request was successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-7890-ABCD-EF1234567890
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': DetectAigcImageResponseBodyBody },
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


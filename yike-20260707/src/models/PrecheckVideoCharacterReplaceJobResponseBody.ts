// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrecheckVideoCharacterReplaceJobResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The validation error code of the input item. For example, ImageCheckFailed indicates that the image validation fails, and AudioCheckFailed indicates that the audio validation fails.
   * 
   * @example
   * ImageCheckFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The name of the input parameter that fails the validation. This name is consistent with the corresponding field name in AppParams.
   * 
   * @example
   * LoadImage.1.TargetImage
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrecheckVideoCharacterReplaceJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot the request.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of items that fail the validation. This is an empty array if the validation passes.
   */
  result?: PrecheckVideoCharacterReplaceJobResponseBodyResult[];
  /**
   * @remarks
   * The pre-validation status. A value of Success indicates that the validation passes. A value of Failed indicates that one or more items fail the validation.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': PrecheckVideoCharacterReplaceJobResponseBodyResult },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


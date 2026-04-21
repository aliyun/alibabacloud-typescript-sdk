// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrecheckYikeAIAppJobResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ImageCheckFailed
   */
  errorCode?: string;
  /**
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

export class PrecheckYikeAIAppJobResponseBody extends $dara.Model {
  /**
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  result?: PrecheckYikeAIAppJobResponseBodyResult[];
  /**
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
      result: { 'type': 'array', 'itemType': PrecheckYikeAIAppJobResponseBodyResult },
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


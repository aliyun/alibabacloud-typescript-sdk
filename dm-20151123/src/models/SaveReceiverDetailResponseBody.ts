// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveReceiverDetailResponseBodyDataDetail extends $dara.Model {
  /**
   * @remarks
   * Recipient address.
   * 
   * @example
   * test@example.com
   */
  email?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveReceiverDetailResponseBodyData extends $dara.Model {
  detail?: SaveReceiverDetailResponseBodyDataDetail[];
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': SaveReceiverDetailResponseBodyDataDetail },
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

export class SaveReceiverDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of recipient addresses that failed to upload.
   */
  data?: SaveReceiverDetailResponseBodyData;
  /**
   * @remarks
   * Number of errors.
   * 
   * @example
   * 638
   */
  errorCount?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @remarks
   * Number of successes.
   * 
   * @example
   * 274
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCount: 'ErrorCount',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SaveReceiverDetailResponseBodyData,
      errorCount: 'number',
      requestId: 'string',
      successCount: 'number',
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


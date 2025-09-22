// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVLExtractionTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 411ce93a-7eb5-40cf-836a-53c32f097663
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitVLExtractionTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data structure.
   */
  data?: SubmitVLExtractionTaskResponseBodyData;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitVLExtractionTaskResponseBodyData,
      requestId: 'string',
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


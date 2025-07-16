// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageTranslateTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * A41F6E25-8520-4AF0-90EF-111111
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
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

export class CreateImageTranslateTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: CreateImageTranslateTaskResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * A41F6E25-8520-4AF0-90EF-AF7E32840108
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: CreateImageTranslateTaskResponseBodyData,
      message: 'string',
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


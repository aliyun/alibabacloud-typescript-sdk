// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSourceResponseBodyData extends $dara.Model {
  /**
   * @example
   * src-crdddallhtgt***
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSourceResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: CreateSourceResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateSourceResponseBodyData,
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


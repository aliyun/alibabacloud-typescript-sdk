// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrecheckResourceCountResponseBodyData extends $dara.Model {
  /**
   * @example
   * t-bp1ewftyzmeg3bl4dtd2
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

export class PrecheckResourceCountResponseBody extends $dara.Model {
  data?: PrecheckResourceCountResponseBodyData;
  /**
   * @example
   * 86DEBAC9-AB6A-59AB-9E5C-A540E579ECC9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: PrecheckResourceCountResponseBodyData,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AISearchResourceAddResponseBodyData extends $dara.Model {
  /**
   * @example
   * WzMGQZwB7nQEs3Qk3ajH
   */
  resourceId?: string;
  /**
   * @example
   * miniapp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AISearchResourceAddResponseBody extends $dara.Model {
  data?: AISearchResourceAddResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4A0AEC56-5C9A-5D47-93DF-7227836FFF82
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
      data: AISearchResourceAddResponseBodyData,
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


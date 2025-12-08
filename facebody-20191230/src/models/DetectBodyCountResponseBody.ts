// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectBodyCountResponseBodyData extends $dara.Model {
  /**
   * @example
   * 6
   */
  personNumber?: number;
  static names(): { [key: string]: string } {
    return {
      personNumber: 'PersonNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      personNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectBodyCountResponseBody extends $dara.Model {
  data?: DetectBodyCountResponseBodyData;
  /**
   * @example
   * 1C709078-8886-4C91-AEDE-4E04EED0A689
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
      data: DetectBodyCountResponseBodyData,
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


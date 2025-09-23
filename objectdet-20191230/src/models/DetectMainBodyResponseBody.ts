// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectMainBodyResponseBodyDataLocation extends $dara.Model {
  /**
   * @example
   * 320
   */
  height?: number;
  /**
   * @example
   * 583
   */
  width?: number;
  /**
   * @example
   * 28
   */
  x?: number;
  /**
   * @example
   * 20
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMainBodyResponseBodyData extends $dara.Model {
  location?: DetectMainBodyResponseBodyDataLocation;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: DetectMainBodyResponseBodyDataLocation,
    };
  }

  validate() {
    if(this.location && typeof (this.location as any).validate === 'function') {
      (this.location as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMainBodyResponseBody extends $dara.Model {
  data?: DetectMainBodyResponseBodyData;
  /**
   * @example
   * 2E59C333-5480-4231-A8AB-BEE1001EA7FE
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
      data: DetectMainBodyResponseBodyData,
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


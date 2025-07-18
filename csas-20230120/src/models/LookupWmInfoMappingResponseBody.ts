// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LookupWmInfoMappingResponseBodyData extends $dara.Model {
  /**
   * @example
   * aGVsbG8gc2F*****
   */
  wmInfoBytesB64?: string;
  static names(): { [key: string]: string } {
    return {
      wmInfoBytesB64: 'WmInfoBytesB64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wmInfoBytesB64: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LookupWmInfoMappingResponseBody extends $dara.Model {
  data?: LookupWmInfoMappingResponseBodyData;
  /**
   * @example
   * 7E9D7ACD-53D5-56EF-A913-79D148D06299
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
      data: LookupWmInfoMappingResponseBodyData,
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


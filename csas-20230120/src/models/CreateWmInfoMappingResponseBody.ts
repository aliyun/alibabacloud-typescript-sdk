// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmInfoMappingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The mapped digital-format watermark information. This value can be used to look up the corresponding string-format watermark information.
   * 
   * @example
   * 123***
   */
  wmInfoUint?: number;
  static names(): { [key: string]: string } {
    return {
      wmInfoUint: 'WmInfoUint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wmInfoUint: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWmInfoMappingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The mapping result.
   */
  data?: CreateWmInfoMappingResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
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
      data: CreateWmInfoMappingResponseBodyData,
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


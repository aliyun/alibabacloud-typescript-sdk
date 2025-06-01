// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateWmInfoMappingResponseBodyData } from "./CreateWmInfoMappingResponseBodyData";


export class CreateWmInfoMappingResponseBody extends $dara.Model {
  data?: CreateWmInfoMappingResponseBodyData;
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


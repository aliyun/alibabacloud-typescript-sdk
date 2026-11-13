// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { E2BVolume } from "./E2bvolume";


export class UpdateVolumeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value is 200 if the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message. The value is success if the request is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7ADFF8D8-D4BA-5F79-AD49-DDABFEA59B6C
   */
  requestId?: string;
  /**
   * @remarks
   * The storage volume information.
   */
  volume?: E2BVolume;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      volume: 'volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      volume: E2BVolume,
    };
  }

  validate() {
    if(this.volume && typeof (this.volume as any).validate === 'function') {
      (this.volume as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


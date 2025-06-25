// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceADAuthServerResponseBodyAD } from "./GetInstanceAdauthServerResponseBodyAd";


export class GetInstanceADAuthServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The settings of AD authentication.
   */
  AD?: GetInstanceADAuthServerResponseBodyAD;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 89398CFB-4EB6-4C7E-BB3C-EF213AC8FA50
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      AD: 'AD',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AD: GetInstanceADAuthServerResponseBodyAD,
      requestId: 'string',
    };
  }

  validate() {
    if(this.AD && typeof (this.AD as any).validate === 'function') {
      (this.AD as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


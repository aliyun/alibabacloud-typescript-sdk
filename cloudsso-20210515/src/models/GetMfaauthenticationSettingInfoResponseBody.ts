// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMFAAuthenticationSettingInfoResponseBodyMFAAuthenticationSettingInfo } from "./GetMfaauthenticationSettingInfoResponseBodyMfaauthenticationSettingInfo";


export class GetMFAAuthenticationSettingInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The MFA setting of all users.
   */
  MFAAuthenticationSettingInfo?: GetMFAAuthenticationSettingInfoResponseBodyMFAAuthenticationSettingInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 95D3B107-DA80-5B34-A3D0-9E82F8F0DA0E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      MFAAuthenticationSettingInfo: 'MFAAuthenticationSettingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MFAAuthenticationSettingInfo: GetMFAAuthenticationSettingInfoResponseBodyMFAAuthenticationSettingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.MFAAuthenticationSettingInfo && typeof (this.MFAAuthenticationSettingInfo as any).validate === 'function') {
      (this.MFAAuthenticationSettingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


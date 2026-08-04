// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEncryptedAccountProfileInfoResponseBodyEncryptedProfileInfo extends $dara.Model {
  encryptedAliyunID?: string;
  encryptedEmail?: string;
  encryptedMobile?: string;
  encryptedSecurityMobile?: string;
  isAliyunIdAnEmail?: boolean;
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedAliyunID: 'EncryptedAliyunID',
      encryptedEmail: 'EncryptedEmail',
      encryptedMobile: 'EncryptedMobile',
      encryptedSecurityMobile: 'EncryptedSecurityMobile',
      isAliyunIdAnEmail: 'IsAliyunIdAnEmail',
      pk: 'pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedAliyunID: 'string',
      encryptedEmail: 'string',
      encryptedMobile: 'string',
      encryptedSecurityMobile: 'string',
      isAliyunIdAnEmail: 'boolean',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEncryptedAccountProfileInfoResponseBody extends $dara.Model {
  encryptedProfileInfo?: QueryEncryptedAccountProfileInfoResponseBodyEncryptedProfileInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      encryptedProfileInfo: 'EncryptedProfileInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedProfileInfo: QueryEncryptedAccountProfileInfoResponseBodyEncryptedProfileInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.encryptedProfileInfo && typeof (this.encryptedProfileInfo as any).validate === 'function') {
      (this.encryptedProfileInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


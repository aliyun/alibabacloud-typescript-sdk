// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateSCIMServerCredentialStatusResponseBodySCIMServerCredential } from "./UpdateScimserverCredentialStatusResponseBodyScimserverCredential";


export class UpdateSCIMServerCredentialStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7C086C2F-1C66-57B3-B14E-2C1DA70727CD
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the SCIM credential.
   */
  SCIMServerCredential?: UpdateSCIMServerCredentialStatusResponseBodySCIMServerCredential;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SCIMServerCredential: 'SCIMServerCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SCIMServerCredential: UpdateSCIMServerCredentialStatusResponseBodySCIMServerCredential,
    };
  }

  validate() {
    if(this.SCIMServerCredential && typeof (this.SCIMServerCredential as any).validate === 'function') {
      (this.SCIMServerCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


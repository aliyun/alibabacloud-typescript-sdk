// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSCIMServerCredentialResponseBodySCIMServerCredential } from "./CreateScimserverCredentialResponseBodyScimserverCredential";


export class CreateSCIMServerCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D2E5180-7ACF-57FF-A56C-26A49ABEBFF7
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the SCIM credential.
   */
  SCIMServerCredential?: CreateSCIMServerCredentialResponseBodySCIMServerCredential;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SCIMServerCredential: 'SCIMServerCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SCIMServerCredential: CreateSCIMServerCredentialResponseBodySCIMServerCredential,
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


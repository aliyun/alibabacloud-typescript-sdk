// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssumeRoleResponseBodyAssumedRoleUser } from "./AssumeRoleResponseBodyAssumedRoleUser";
import { AssumeRoleResponseBodyCredentials } from "./AssumeRoleResponseBodyCredentials";


export class AssumeRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The temporary identity that you use to assume the RAM role.
   */
  assumedRoleUser?: AssumeRoleResponseBodyAssumedRoleUser;
  /**
   * @remarks
   * The STS credentials.
   */
  credentials?: AssumeRoleResponseBodyCredentials;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6894B13B-6D71-4EF5-88FA-F32781734A7F
   */
  requestId?: string;
  sourceIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
      requestId: 'RequestId',
      sourceIdentity: 'SourceIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleUser: AssumeRoleResponseBodyAssumedRoleUser,
      credentials: AssumeRoleResponseBodyCredentials,
      requestId: 'string',
      sourceIdentity: 'string',
    };
  }

  validate() {
    if(this.assumedRoleUser && typeof (this.assumedRoleUser as any).validate === 'function') {
      (this.assumedRoleUser as any).validate();
    }
    if(this.credentials && typeof (this.credentials as any).validate === 'function') {
      (this.credentials as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


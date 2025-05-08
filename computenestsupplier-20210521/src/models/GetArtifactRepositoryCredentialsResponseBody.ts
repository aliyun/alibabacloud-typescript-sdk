// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetArtifactRepositoryCredentialsResponseBodyAvailableResources } from "./GetArtifactRepositoryCredentialsResponseBodyAvailableResources";
import { GetArtifactRepositoryCredentialsResponseBodyCredentials } from "./GetArtifactRepositoryCredentialsResponseBodyCredentials";


export class GetArtifactRepositoryCredentialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the resources that can be uploaded.
   */
  availableResources?: GetArtifactRepositoryCredentialsResponseBodyAvailableResources[];
  /**
   * @remarks
   * The credentials.
   */
  credentials?: GetArtifactRepositoryCredentialsResponseBodyCredentials;
  /**
   * @remarks
   * The time when the credentials expired.
   * 
   * @example
   * 1526549792000
   */
  expireDate?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94E89857-B994-44B6-9C4F-DBD200E9XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableResources: 'AvailableResources',
      credentials: 'Credentials',
      expireDate: 'ExpireDate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableResources: { 'type': 'array', 'itemType': GetArtifactRepositoryCredentialsResponseBodyAvailableResources },
      credentials: GetArtifactRepositoryCredentialsResponseBodyCredentials,
      expireDate: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableResources)) {
      $dara.Model.validateArray(this.availableResources);
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


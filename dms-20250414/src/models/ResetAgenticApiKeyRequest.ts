// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetAgenticApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the new Access Token starting from the time of this reset, in seconds. Valid values: 1 to 31536000 (approximately 365 days). If you do not specify this parameter, the original expiration time of the Access Token is retained. This parameter is required when the target Access Token has already expired. Otherwise, the system retains the past expiration time and issues an Access Token that is invalid upon creation, and the request is rejected.
   * 
   * @example
   * 2592000
   */
  expireAfterSeconds?: number;
  /**
   * @remarks
   * The ID of the data gateway Access Token to reset. This value is the same as the Id returned by the create and query operations. Only the creator of the Access Token can reset it, and the target Access Token cannot be in a revoked state.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      expireAfterSeconds: 'ExpireAfterSeconds',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireAfterSeconds: 'number',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


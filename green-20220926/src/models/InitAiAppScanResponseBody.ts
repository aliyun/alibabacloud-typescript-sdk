// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthInfoConfigValue } from "./AuthInfoConfigValue";


export class InitAiAppScanResponseBodyAuthInfo extends $dara.Model {
  /**
   * @remarks
   * The credential.
   * 
   * @example
   * token-xxx
   */
  authToken?: string;
  /**
   * @remarks
   * The private domain name.
   * 
   * @example
   * https://xxx
   */
  privateDomain?: string;
  /**
   * @remarks
   * The project space.
   * 
   * @example
   * proj-xxx
   */
  project?: string;
  /**
   * @remarks
   * The public domain name.
   * 
   * @example
   * https://xxx
   */
  publicDomain?: string;
  static names(): { [key: string]: string } {
    return {
      authToken: 'AuthToken',
      privateDomain: 'PrivateDomain',
      project: 'Project',
      publicDomain: 'PublicDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authToken: 'string',
      privateDomain: 'string',
      project: 'string',
      publicDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitAiAppScanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access entry information.
   */
  authInfo?: InitAiAppScanResponseBodyAuthInfo;
  /**
   * @remarks
   * The access information.
   */
  authInfoConfig?: { [key: string]: AuthInfoConfigValue };
  /**
   * @remarks
   * The authorization status.
   * 
   * @example
   * enabled
   */
  authStatus?: string;
  /**
   * @remarks
   * The service activation status.
   * 
   * @example
   * enabled
   */
  openStatus?: string;
  /**
   * @remarks
   * The ready status.
   * 
   * @example
   * enabled
   */
  readyStatus?: string;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. Used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authInfo: 'AuthInfo',
      authInfoConfig: 'AuthInfoConfig',
      authStatus: 'AuthStatus',
      openStatus: 'OpenStatus',
      readyStatus: 'ReadyStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authInfo: InitAiAppScanResponseBodyAuthInfo,
      authInfoConfig: { 'type': 'map', 'keyType': 'string', 'valueType': AuthInfoConfigValue },
      authStatus: 'string',
      openStatus: 'string',
      readyStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.authInfo && typeof (this.authInfo as any).validate === 'function') {
      (this.authInfo as any).validate();
    }
    if(this.authInfoConfig) {
      $dara.Model.validateMap(this.authInfoConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerRepositoryMirrorSyncRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @example
   * test-account
   */
  account?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  /**
   * @example
   * asd12e44827fe2444f952e931e51xxxx
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      account: 'account',
      organizationId: 'organizationId',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      account: 'string',
      organizationId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


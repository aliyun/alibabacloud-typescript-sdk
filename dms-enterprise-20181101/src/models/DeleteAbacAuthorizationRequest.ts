// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAbacAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  authorizationId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USER
   */
  identityType?: string;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'AuthorizationId',
      identityType: 'IdentityType',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'number',
      identityType: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


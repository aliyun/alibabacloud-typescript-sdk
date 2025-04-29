// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackendRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backend service.
   * 
   * @example
   * 27be0dd9ebbc467b9e86c0d250d0b92e
   */
  backendId?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


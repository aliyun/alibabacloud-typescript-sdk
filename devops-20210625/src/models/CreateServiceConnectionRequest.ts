// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServiceConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CREDENTIAL
   */
  authType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  connectionName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  connectionType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PERSON
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111
   */
  serviceAuthId?: number;
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      connectionName: 'connectionName',
      connectionType: 'connectionType',
      scope: 'scope',
      serviceAuthId: 'serviceAuthId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      connectionName: 'string',
      connectionType: 'string',
      scope: 'string',
      serviceAuthId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


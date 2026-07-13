// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserRequest extends $dara.Model {
  authMethod?: string;
  clientToken?: string;
  displayName?: string;
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  note?: string;
  static names(): { [key: string]: string } {
    return {
      authMethod: 'AuthMethod',
      clientToken: 'ClientToken',
      displayName: 'DisplayName',
      email: 'Email',
      instanceId: 'InstanceId',
      name: 'Name',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMethod: 'string',
      clientToken: 'string',
      displayName: 'string',
      email: 'string',
      instanceId: 'string',
      name: 'string',
      note: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


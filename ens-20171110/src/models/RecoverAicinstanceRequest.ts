// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverAICInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the server.
   * 
   * This parameter is required.
   * 
   * @example
   * cas-instance****
   */
  serverId?: string;
  static names(): { [key: string]: string } {
    return {
      serverId: 'ServerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


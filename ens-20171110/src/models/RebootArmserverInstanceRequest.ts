// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootARMServerInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the server.
   * 
   * @example
   * yourInstance ID
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


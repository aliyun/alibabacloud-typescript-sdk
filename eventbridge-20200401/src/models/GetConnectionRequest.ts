// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The connection name.
   * 
   * This parameter is required.
   * 
   * @example
   * connection-name
   */
  connectionName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionName: 'ConnectionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


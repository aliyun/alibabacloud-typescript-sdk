// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVscRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the VSC that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * vsc-001
   */
  vscId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      vscId: 'VscId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      vscId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


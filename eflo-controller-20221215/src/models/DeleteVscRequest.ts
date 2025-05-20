// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVscRequest extends $dara.Model {
  /**
   * @remarks
   * Idempotent parameter
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The VscId to be deleted
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


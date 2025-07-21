// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the client key.
   * 
   * This parameter is required.
   * 
   * @example
   * KAAP.66abf237-63f6-4625-b8cf-47e1086e****
   */
  clientKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientKeyId: 'ClientKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


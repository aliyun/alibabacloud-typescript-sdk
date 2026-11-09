// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The client-generated idempotency token. This is a reserved parameter, and the backend does not currently provide persistent idempotency guarantees.
   * 
   * @example
   * c2d8a6f0-3b1e-4a7d-9f25-6e4b0c1a8d37
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApiMcpServerRequest extends $dara.Model {
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request. Generate this value on your client and make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. Use a universally unique identifier (UUID). The token is valid for three days.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the API MCP service.
   * 
   * This parameter is required.
   * 
   * @example
   * v6ZZ7ftCzEILW***
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


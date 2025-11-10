// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApiMcpServerRequest extends $dara.Model {
  /**
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnvironmentRequest extends $dara.Model {
  /**
   * @remarks
   * Schema of Response
   * 
   * This parameter is required.
   * 
   * @example
   * The request ID, which is used to trace the API call link.
   */
  alias?: string;
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * The response message returned.
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


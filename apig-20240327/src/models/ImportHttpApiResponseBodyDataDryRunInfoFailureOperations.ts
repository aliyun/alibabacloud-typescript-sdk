// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportHttpApiResponseBodyDataDryRunInfoFailureOperations extends $dara.Model {
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Missing response definition.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP method of the operation.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The operation path.
   * 
   * @example
   * /v1/orders
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      method: 'method',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      method: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


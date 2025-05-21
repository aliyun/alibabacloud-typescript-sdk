// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportHttpApiResponseBodyDataDryRunInfoSuccessOperations extends $dara.Model {
  /**
   * @remarks
   * The action that will be performed for the operation after the dry run.
   * 
   * *   Create: The operation is created.
   * *   Update: The operation is updated.
   * 
   * @example
   * Create
   */
  action?: string;
  /**
   * @remarks
   * The HTTP method of the operation.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The operation name.
   * 
   * @example
   * CreateUser
   */
  name?: string;
  /**
   * @remarks
   * The operation path.
   * 
   * @example
   * /v1/users
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      method: 'method',
      name: 'name',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      method: 'string',
      name: 'string',
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


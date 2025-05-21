// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportHttpApiResponseBodyDataDryRunInfoSuccessComponents extends $dara.Model {
  /**
   * @remarks
   * The action that will be performed for the data struct after the dry run.
   * 
   * *   Create: The data struct is created.
   * *   Update: The data struct is updated.
   * 
   * @example
   * Create
   */
  action?: string;
  /**
   * @remarks
   * The data struct name.
   * 
   * @example
   * userDTO
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


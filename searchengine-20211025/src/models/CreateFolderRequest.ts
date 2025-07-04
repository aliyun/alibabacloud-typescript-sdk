// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFolderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gist_qc
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  parent?: number;
  /**
   * @remarks
   * table, instance, template, function
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      parent: 'parent',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parent: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


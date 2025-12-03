// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ABCD
   */
  customCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * public
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 704eaxxxx5efede61xxx5
   */
  templateIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      customCode: 'customCode',
      name: 'name',
      scope: 'scope',
      templateIdentifier: 'templateIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customCode: 'string',
      name: 'string',
      scope: 'string',
      templateIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


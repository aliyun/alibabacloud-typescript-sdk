// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Function extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  className?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  functionLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  functionType?: string;
  gmtModified?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      className: 'className',
      description: 'description',
      functionLanguage: 'functionLanguage',
      functionType: 'functionType',
      gmtModified: 'gmtModified',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      className: 'string',
      description: 'string',
      functionLanguage: 'string',
      functionType: 'string',
      gmtModified: 'number',
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


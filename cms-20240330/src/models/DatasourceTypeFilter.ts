// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasourceTypeFilter extends $dara.Model {
  /**
   * @remarks
   * The exact match value.
   * 
   * @example
   * APM_DS
   */
  eq?: string;
  static names(): { [key: string]: string } {
    return {
      eq: 'eq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eq: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


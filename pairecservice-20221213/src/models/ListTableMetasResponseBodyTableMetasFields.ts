// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableMetasResponseBodyTableMetasFields extends $dara.Model {
  /**
   * @example
   * false
   */
  isDimensionField?: boolean;
  /**
   * @example
   * the gender of people
   */
  meaning?: string;
  /**
   * @example
   * gender
   */
  name?: string;
  /**
   * @example
   * BIGINT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      isDimensionField: 'IsDimensionField',
      meaning: 'Meaning',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDimensionField: 'boolean',
      meaning: 'string',
      name: 'string',
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


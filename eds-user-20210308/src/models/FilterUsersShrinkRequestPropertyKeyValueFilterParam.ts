// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterUsersShrinkRequestPropertyKeyValueFilterParam extends $dara.Model {
  /**
   * @remarks
   * The property name.
   * 
   * @example
   * job
   */
  propertyKey?: string;
  /**
   * @remarks
   * The property values.
   * 
   * @example
   * dev
   */
  propertyValues?: string;
  static names(): { [key: string]: string } {
    return {
      propertyKey: 'PropertyKey',
      propertyValues: 'PropertyValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyKey: 'string',
      propertyValues: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


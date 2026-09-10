// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FilterList extends $dara.Model {
  /**
   * @remarks
   * The dimension key.
   * 
   * This parameter is required.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The filter type.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  type?: string;
  /**
   * @remarks
   * The filter value. This parameter can be left empty when type is set to ALL or DISABLED.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


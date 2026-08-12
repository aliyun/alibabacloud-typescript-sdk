// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApmFilterConfig extends $dara.Model {
  /**
   * @remarks
   * The dimension key.
   * 
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * The filter type.
   * 
   * This parameter is required.
   */
  type?: string;
  /**
   * @remarks
   * The filter value. This can be empty when type is ALL or DISABLED.
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


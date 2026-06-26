// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IcebergPartitionField extends $dara.Model {
  /**
   * @remarks
   * The partition ID.
   * 
   * @example
   * 1
   */
  fieldId?: number;
  /**
   * @remarks
   * The partition name.
   * 
   * @example
   * ts_day
   */
  name?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * 0
   */
  sourceId?: number;
  /**
   * @remarks
   * The transformation rule.
   * 
   * @example
   * day
   */
  transform?: string;
  static names(): { [key: string]: string } {
    return {
      fieldId: 'fieldId',
      name: 'name',
      sourceId: 'sourceId',
      transform: 'transform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldId: 'number',
      name: 'string',
      sourceId: 'number',
      transform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


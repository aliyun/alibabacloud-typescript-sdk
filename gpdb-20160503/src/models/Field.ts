// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Field extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded binary.
   */
  blobValue?: string;
  /**
   * @remarks
   * The Boolean value.
   */
  booleanValue?: boolean;
  /**
   * @remarks
   * The Double value.
   */
  doubleValue?: number;
  /**
   * @remarks
   * Indicates whether the value is null.
   */
  isNull?: boolean;
  /**
   * @remarks
   * The Long value.
   */
  longValue?: number;
  /**
   * @remarks
   * The string.
   */
  stringValue?: string;
  static names(): { [key: string]: string } {
    return {
      blobValue: 'BlobValue',
      booleanValue: 'BooleanValue',
      doubleValue: 'DoubleValue',
      isNull: 'IsNull',
      longValue: 'LongValue',
      stringValue: 'StringValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blobValue: 'string',
      booleanValue: 'boolean',
      doubleValue: 'number',
      isNull: 'boolean',
      longValue: 'number',
      stringValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


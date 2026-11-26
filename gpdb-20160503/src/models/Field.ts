// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Field extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded binary.
   * 
   * @example
   * aGVsbG8=
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
   * 
   * @example
   * 1.25
   */
  doubleValue?: number;
  /**
   * @remarks
   * The null status.
   */
  isNull?: boolean;
  /**
   * @remarks
   * The Long value.
   * 
   * @example
   * 123456789
   */
  longValue?: number;
  /**
   * @remarks
   * The string.
   * 
   * @example
   * Sample text
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


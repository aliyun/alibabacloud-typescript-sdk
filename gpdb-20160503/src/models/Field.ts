// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Field extends $dara.Model {
  blobValue?: string;
  booleanValue?: boolean;
  doubleValue?: number;
  isNull?: boolean;
  longValue?: number;
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserPropertiesValue extends $dara.Model {
  dataType?: string;
  stringValue?: string;
  binaryValue?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      stringValue: 'StringValue',
      binaryValue: 'BinaryValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      stringValue: 'string',
      binaryValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


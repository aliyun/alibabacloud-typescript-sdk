// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DLSerdeInfo extends $dara.Model {
  description?: string;
  deserializerClass?: string;
  name?: string;
  parameters?: { [key: string]: any };
  serdeType?: number;
  serializationLib?: string;
  serializerClass?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      deserializerClass: 'DeserializerClass',
      name: 'Name',
      parameters: 'Parameters',
      serdeType: 'SerdeType',
      serializationLib: 'SerializationLib',
      serializerClass: 'SerializerClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      deserializerClass: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      serdeType: 'number',
      serializationLib: 'string',
      serializerClass: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


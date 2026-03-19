// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DLSerdeInfo extends $dara.Model {
  /**
   * @remarks
   * The description of serialization.
   * 
   * @example
   * "serialize"
   */
  description?: string;
  /**
   * @remarks
   * The name of the class used for deserialization.
   * 
   * @example
   * org.apache.hadoop.hive.serde2.OpenCSVSerde
   */
  deserializerClass?: string;
  /**
   * @remarks
   * The name of serialization.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * Serialization-related parameters in key-value pairs.
   * 
   * @example
   * {          "serialization.format": "1"
   *         }
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The type of serialization.
   * 
   * @example
   * 0
   */
  serdeType?: number;
  /**
   * @remarks
   * The class name of the serialization library.
   * 
   * @example
   * org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe
   */
  serializationLib?: string;
  /**
   * @remarks
   * The name of class used for serialization.
   * 
   * @example
   * org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe
   */
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


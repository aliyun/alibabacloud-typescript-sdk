// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SerDeInfoModel extends $dara.Model {
  /**
   * @remarks
   * The name of the serialization or deserialization information.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The serialization or deserialization configuration parameter.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the serialization or deserialization information.
   * 
   * @example
   * 123
   */
  serDeId?: number;
  /**
   * @remarks
   * The library that is used for serialization.
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe
   */
  serializationLib?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameters: 'Parameters',
      serDeId: 'SerDeId',
      serializationLib: 'SerializationLib',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serDeId: 'number',
      serializationLib: 'string',
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


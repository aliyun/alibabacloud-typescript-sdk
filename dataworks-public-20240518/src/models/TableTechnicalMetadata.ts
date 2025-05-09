// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableTechnicalMetadata extends $dara.Model {
  /**
   * @example
   * false
   */
  compressed?: boolean;
  /**
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat
   */
  inputFormat?: string;
  /**
   * @example
   * oss://test-bucket/test_tbl
   */
  location?: string;
  /**
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat
   */
  outputFormat?: string;
  /**
   * @example
   * 123456789
   */
  owner?: string;
  parameters?: { [key: string]: string };
  /**
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe
   */
  serializationLibrary?: string;
  static names(): { [key: string]: string } {
    return {
      compressed: 'Compressed',
      inputFormat: 'InputFormat',
      location: 'Location',
      outputFormat: 'OutputFormat',
      owner: 'Owner',
      parameters: 'Parameters',
      serializationLibrary: 'SerializationLibrary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressed: 'boolean',
      inputFormat: 'string',
      location: 'string',
      outputFormat: 'string',
      owner: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serializationLibrary: 'string',
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


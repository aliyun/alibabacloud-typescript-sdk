// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SerDeInfoModel } from "./SerDeInfoModel";


export class StorageDescriptorModel extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the storage description is compressed.
   * 
   * @example
   * false
   */
  compressed?: boolean;
  /**
   * @remarks
   * The input format of the storage description.
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat
   */
  inputFormat?: string;
  /**
   * @remarks
   * The location of the storage description.
   * 
   * @example
   * oss://**************
   */
  location?: string;
  /**
   * @remarks
   * The number of buckets.
   * 
   * @example
   * 1
   */
  numBuckets?: number;
  /**
   * @remarks
   * The output format of the storage description.
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat
   */
  outputFormat?: string;
  /**
   * @remarks
   * The storage configuration parameter.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the storage description.
   * 
   * @example
   * 1
   */
  sdId?: number;
  /**
   * @remarks
   * The information about serialization or deserialization.
   */
  serDeInfo?: SerDeInfoModel;
  /**
   * @remarks
   * Indicates whether the storage description is stored in subdirectories.
   * 
   * @example
   * false
   */
  storedAsSubDirectories?: boolean;
  static names(): { [key: string]: string } {
    return {
      compressed: 'Compressed',
      inputFormat: 'InputFormat',
      location: 'Location',
      numBuckets: 'NumBuckets',
      outputFormat: 'OutputFormat',
      parameters: 'Parameters',
      sdId: 'SdId',
      serDeInfo: 'SerDeInfo',
      storedAsSubDirectories: 'StoredAsSubDirectories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressed: 'boolean',
      inputFormat: 'string',
      location: 'string',
      numBuckets: 'number',
      outputFormat: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sdId: 'number',
      serDeInfo: SerDeInfoModel,
      storedAsSubDirectories: 'boolean',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(this.serDeInfo && typeof (this.serDeInfo as any).validate === 'function') {
      (this.serDeInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


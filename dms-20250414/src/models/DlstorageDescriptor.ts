// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLColumn } from "./Dlcolumn";
import { DLSerdeInfo } from "./DlserdeInfo";
import { DLSkewedInfo } from "./DlskewedInfo";
import { DLOrder } from "./Dlorder";


export class DLStorageDescriptor extends $dara.Model {
  /**
   * @remarks
   * A list of bucket column names that determine the hash distribution of the data.
   */
  bucketCols?: string[];
  /**
   * @remarks
   * The description of the data columns in the table.
   */
  columns?: DLColumn[];
  /**
   * @remarks
   * The name of the input format class used to read data.
   * 
   * @example
   * org.apache.hadoop.mapred.SequenceFileInputFormat
   */
  inputFormat?: string;
  /**
   * @remarks
   * Specifies whether the data is compressed.
   * 
   * @example
   * false
   */
  isCompressed?: boolean;
  /**
   * @remarks
   * The specific location of the data storage.
   * 
   * @example
   * oss://xxx
   */
  location?: string;
  /**
   * @remarks
   * The number of buckets.
   * 
   * @example
   * -1
   */
  numBuckets?: number;
  /**
   * @remarks
   * The description of the original columns.
   */
  originalColumns?: DLColumn[];
  /**
   * @remarks
   * The name of the output format class used to write data.
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.HiveSequenceFileOutputFormat
   */
  outputFormat?: string;
  /**
   * @remarks
   * Other parameter mappings for data storage.
   * 
   * @example
   * key/value
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The serialization and deserialization information.
   */
  serdeInfo?: DLSerdeInfo;
  /**
   * @remarks
   * The data structure that stores information about skewed columns.
   */
  skewedInfo?: DLSkewedInfo;
  /**
   * @remarks
   * The description of the sorted columns.
   */
  sortCols?: DLOrder[];
  static names(): { [key: string]: string } {
    return {
      bucketCols: 'BucketCols',
      columns: 'Columns',
      inputFormat: 'InputFormat',
      isCompressed: 'IsCompressed',
      location: 'Location',
      numBuckets: 'NumBuckets',
      originalColumns: 'OriginalColumns',
      outputFormat: 'OutputFormat',
      parameters: 'Parameters',
      serdeInfo: 'SerdeInfo',
      skewedInfo: 'SkewedInfo',
      sortCols: 'SortCols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketCols: { 'type': 'array', 'itemType': 'string' },
      columns: { 'type': 'array', 'itemType': DLColumn },
      inputFormat: 'string',
      isCompressed: 'boolean',
      location: 'string',
      numBuckets: 'number',
      originalColumns: { 'type': 'array', 'itemType': DLColumn },
      outputFormat: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      serdeInfo: DLSerdeInfo,
      skewedInfo: DLSkewedInfo,
      sortCols: { 'type': 'array', 'itemType': DLOrder },
    };
  }

  validate() {
    if(Array.isArray(this.bucketCols)) {
      $dara.Model.validateArray(this.bucketCols);
    }
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.originalColumns)) {
      $dara.Model.validateArray(this.originalColumns);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(this.serdeInfo && typeof (this.serdeInfo as any).validate === 'function') {
      (this.serdeInfo as any).validate();
    }
    if(this.skewedInfo && typeof (this.skewedInfo as any).validate === 'function') {
      (this.skewedInfo as any).validate();
    }
    if(Array.isArray(this.sortCols)) {
      $dara.Model.validateArray(this.sortCols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


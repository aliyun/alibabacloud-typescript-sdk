// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLColumn } from "./Dlcolumn";
import { DLSerdeInfo } from "./DlserdeInfo";
import { DLSkewedInfo } from "./DlskewedInfo";
import { DLOrder } from "./Dlorder";


export class DLStorageDescriptor extends $dara.Model {
  /**
   * @remarks
   * The list of bucket column names, which determines the distribution of stored data based on hashes.
   */
  bucketCols?: string[];
  /**
   * @remarks
   * The description of the data columns.
   */
  columns?: DLColumn[];
  /**
   * @remarks
   * The name of the input format class that is used to read data.
   * 
   * @example
   * org.apache.hadoop.mapred.SequenceFileInputFormat
   */
  inputFormat?: string;
  /**
   * @remarks
   * Specifies whether the stored data is compressed.
   * 
   * @example
   * false
   */
  isCompressed?: boolean;
  /**
   * @remarks
   * The location where the data is stored.
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
   * The description of the original column.
   */
  originalColumns?: DLColumn[];
  /**
   * @remarks
   * The name of the output format class that is used to write data.
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.HiveSequenceFileOutputFormat
   */
  outputFormat?: string;
  /**
   * @remarks
   * Other parameter mappings of data storage.
   * 
   * @example
   * key/value
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The information about how to perform data serialization and deserialization.
   */
  serdeInfo?: DLSerdeInfo;
  /**
   * @remarks
   * The information about the skewed column.
   */
  skewedInfo?: DLSkewedInfo;
  /**
   * @remarks
   * The description of the column based on which you want to sort query results.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WriteFeatureViewTableRequestUrlDatasource extends $dara.Model {
  /**
   * @remarks
   * The file delimiter.
   * 
   * @example
   * ,
   */
  delimiter?: string;
  /**
   * @remarks
   * Specifies whether to omit the header from the source file.
   * 
   * @example
   * true
   */
  omitHeader?: boolean;
  /**
   * @remarks
   * The data source path.
   * 
   * @example
   * xxx.xxx.com/file.csv
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      delimiter: 'Delimiter',
      omitHeader: 'OmitHeader',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delimiter: 'string',
      omitHeader: 'boolean',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WriteFeatureViewTableRequest extends $dara.Model {
  /**
   * @remarks
   * The write mode.
   * 
   * - Overwrite: Overwrites existing data.
   * 
   * - Merge: Merges the new data with existing data.
   * 
   * This parameter is required.
   * 
   * @example
   * Merge
   */
  mode?: string;
  /**
   * @remarks
   * The partitions to write to.
   */
  partitions?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The file data source.
   */
  urlDatasource?: WriteFeatureViewTableRequestUrlDatasource;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      partitions: 'Partitions',
      urlDatasource: 'UrlDatasource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      partitions: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      urlDatasource: WriteFeatureViewTableRequestUrlDatasource,
    };
  }

  validate() {
    if(this.partitions) {
      $dara.Model.validateMap(this.partitions);
    }
    if(this.urlDatasource && typeof (this.urlDatasource as any).validate === 'function') {
      (this.urlDatasource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


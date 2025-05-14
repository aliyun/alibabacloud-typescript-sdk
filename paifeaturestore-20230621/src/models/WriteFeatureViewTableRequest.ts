// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WriteFeatureViewTableRequestUrlDatasource } from "./WriteFeatureViewTableRequestUrlDatasource";


export class WriteFeatureViewTableRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Merge
   */
  mode?: string;
  partitions?: { [key: string]: {[key: string]: any} };
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


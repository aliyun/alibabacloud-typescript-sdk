// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataCacheRequestDataSource extends $dara.Model {
  /**
   * @remarks
   * The parameters that are configured for the data source.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   URL
   * *   NAS
   * *   OSS
   * *   SNAPSHOT
   * 
   * @example
   * NAS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      options: 'Options',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WriteFeatureViewTableRequestUrlDatasource extends $dara.Model {
  /**
   * @example
   * ,
   */
  delimiter?: string;
  /**
   * @example
   * true
   */
  omitHeader?: boolean;
  /**
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


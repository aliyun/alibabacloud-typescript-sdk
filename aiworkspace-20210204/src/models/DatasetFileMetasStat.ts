// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetFileMetasStat extends $dara.Model {
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @example
   * cat
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


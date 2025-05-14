// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaResponseBodyMediaInfoListIndexStatusList extends $dara.Model {
  /**
   * @example
   * Success
   */
  indexStatus?: string;
  /**
   * @example
   * mm
   */
  indexType?: string;
  static names(): { [key: string]: string } {
    return {
      indexStatus: 'IndexStatus',
      indexType: 'IndexType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexStatus: 'string',
      indexType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


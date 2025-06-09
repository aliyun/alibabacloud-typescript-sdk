// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogsV2ResponseBodyMetaPhraseQueryInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  beginOffset?: number;
  /**
   * @example
   * 0
   */
  endOffset?: number;
  /**
   * @example
   * 1
   */
  endTime?: number;
  /**
   * @example
   * true
   */
  scanAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      beginOffset: 'beginOffset',
      endOffset: 'endOffset',
      endTime: 'endTime',
      scanAll: 'scanAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginOffset: 'number',
      endOffset: 'number',
      endTime: 'number',
      scanAll: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


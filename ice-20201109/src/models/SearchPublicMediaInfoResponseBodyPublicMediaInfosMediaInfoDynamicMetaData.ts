// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData extends $dara.Model {
  /**
   * @example
   * "{\\"AuditionUrl\\": \\"http://xxx\\", \\"AuditionCount\\": 3...}"
   */
  data?: string;
  /**
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


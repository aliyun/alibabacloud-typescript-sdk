// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventsViewResponseBodyEventsExtendedPropertiesSharedProperties extends $dara.Model {
  /**
   * @example
   * dingd8*****1231
   */
  belongCorpId?: string;
  /**
   * @example
   * zxcvasdfa123===
   */
  sourceOpenCid?: string;
  static names(): { [key: string]: string } {
    return {
      belongCorpId: 'BelongCorpId',
      sourceOpenCid: 'SourceOpenCid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongCorpId: 'string',
      sourceOpenCid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


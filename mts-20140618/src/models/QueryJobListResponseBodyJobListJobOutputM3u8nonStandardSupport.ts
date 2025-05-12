// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupportTS } from "./QueryJobListResponseBodyJobListJobOutputM3u8nonStandardSupportTs";


export class QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupport extends $dara.Model {
  /**
   * @remarks
   * The non-standard support configurations for TS files. The value is a JSON object. For more information, see the TS section of the [Parameter details](https://help.aliyun.com/document_detail/29253.html) topic.
   */
  TS?: QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupportTS;
  static names(): { [key: string]: string } {
    return {
      TS: 'TS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TS: QueryJobListResponseBodyJobListJobOutputM3U8NonStandardSupportTS,
    };
  }

  validate() {
    if(this.TS && typeof (this.TS as any).validate === 'function') {
      (this.TS as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


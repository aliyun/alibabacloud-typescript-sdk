// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobResponseBodyJobListJobOutputM3U8NonStandardSupportTS } from "./ListJobResponseBodyJobListJobOutputM3u8nonStandardSupportTs";


export class ListJobResponseBodyJobListJobOutputM3U8NonStandardSupport extends $dara.Model {
  /**
   * @remarks
   * The non-standard support configurations for TS files. The value is a JSON object. For more information, see [Parameter details](https://help.aliyun.com/document_detail/29253.html).
   */
  TS?: ListJobResponseBodyJobListJobOutputM3U8NonStandardSupportTS;
  static names(): { [key: string]: string } {
    return {
      TS: 'TS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      TS: ListJobResponseBodyJobListJobOutputM3U8NonStandardSupportTS,
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


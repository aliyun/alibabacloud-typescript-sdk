// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunMarketingInformationWritingResponseBodyHeader } from "./RunMarketingInformationWritingResponseBodyHeader";
import { RunMarketingInformationWritingResponseBodyPayload } from "./RunMarketingInformationWritingResponseBodyPayload";


export class RunMarketingInformationWritingResponseBody extends $dara.Model {
  /**
   * @example
   * 2024-06-21T10:29:52+08:00
   */
  end?: boolean;
  header?: RunMarketingInformationWritingResponseBodyHeader;
  payload?: RunMarketingInformationWritingResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunMarketingInformationWritingResponseBodyHeader,
      payload: RunMarketingInformationWritingResponseBodyPayload,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunMarketingInformationExtractResponseBodyHeader } from "./RunMarketingInformationExtractResponseBodyHeader";
import { RunMarketingInformationExtractResponseBodyPayload } from "./RunMarketingInformationExtractResponseBodyPayload";


export class RunMarketingInformationExtractResponseBody extends $dara.Model {
  /**
   * @example
   * {\\"TimeZone\\": \\"Asia/Shanghai\\", \\"DateTime\\": \\"2024-03-07T17:00:09+08:00\\"}
   */
  end?: boolean;
  header?: RunMarketingInformationExtractResponseBodyHeader;
  payload?: RunMarketingInformationExtractResponseBodyPayload;
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
      header: RunMarketingInformationExtractResponseBodyHeader,
      payload: RunMarketingInformationExtractResponseBodyPayload,
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


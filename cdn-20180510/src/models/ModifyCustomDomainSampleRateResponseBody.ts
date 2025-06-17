// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyCustomDomainSampleRateResponseBodyContent } from "./ModifyCustomDomainSampleRateResponseBodyContent";


export class ModifyCustomDomainSampleRateResponseBody extends $dara.Model {
  content?: ModifyCustomDomainSampleRateResponseBodyContent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ModifyCustomDomainSampleRateResponseBodyContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


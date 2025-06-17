// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCustomDomainSampleRateResponseBodyContent } from "./DescribeCustomDomainSampleRateResponseBodyContent";


export class DescribeCustomDomainSampleRateResponseBody extends $dara.Model {
  content?: DescribeCustomDomainSampleRateResponseBodyContent;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeCustomDomainSampleRateResponseBodyContent,
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


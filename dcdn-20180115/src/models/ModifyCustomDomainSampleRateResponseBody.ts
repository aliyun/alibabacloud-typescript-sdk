// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomDomainSampleRateResponseBodyContent extends $dara.Model {
  domainName?: string;
  errMessage?: string;
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      errMessage: 'ErrMessage',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      errMessage: 'string',
      sampleRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCustomDomainSampleRateResponseBody extends $dara.Model {
  content?: ModifyCustomDomainSampleRateResponseBodyContent[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ModifyCustomDomainSampleRateResponseBodyContent },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomDomainSampleRateResponseBodyContentContent extends $dara.Model {
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

export class ModifyCustomDomainSampleRateResponseBodyContent extends $dara.Model {
  content?: ModifyCustomDomainSampleRateResponseBodyContentContent[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ModifyCustomDomainSampleRateResponseBodyContentContent },
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


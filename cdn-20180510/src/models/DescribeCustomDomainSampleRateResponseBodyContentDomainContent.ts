// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomDomainSampleRateResponseBodyContentDomainContent extends $dara.Model {
  domainName?: string;
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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


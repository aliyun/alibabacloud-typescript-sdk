// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustomDomainSampleRateRequest extends $dara.Model {
  baseConfigID?: string;
  domainNames?: string;
  sampleRate?: number;
  sinkID?: number;
  static names(): { [key: string]: string } {
    return {
      baseConfigID: 'BaseConfigID',
      domainNames: 'DomainNames',
      sampleRate: 'SampleRate',
      sinkID: 'SinkID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseConfigID: 'string',
      domainNames: 'string',
      sampleRate: 'number',
      sinkID: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


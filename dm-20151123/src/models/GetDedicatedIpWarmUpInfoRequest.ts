// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDedicatedIpWarmUpInfoRequest extends $dara.Model {
  dedicatedIp?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedIp: 'DedicatedIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


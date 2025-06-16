// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMirrorFilterRulesResponseBodyIngressRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the inbound rule.
   * 
   * @example
   * tmr-j6c6rtallo51ouzv3****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


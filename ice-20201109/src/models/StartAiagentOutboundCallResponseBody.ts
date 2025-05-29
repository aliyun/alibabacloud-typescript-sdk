// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAIAgentOutboundCallResponseBody extends $dara.Model {
  /**
   * @example
   * *********296014bb58670940*********
   */
  instanceId?: string;
  /**
   * @example
   * ***********-4417-BDB2************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


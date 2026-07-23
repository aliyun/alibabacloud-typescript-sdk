// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseTrafficControlTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The execution environment for the traffic control task. Valid values: `Daily`, `Pre`, and `Prod`.
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pairec_123****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
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


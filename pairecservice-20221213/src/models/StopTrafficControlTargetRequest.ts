// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopTrafficControlTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The environment.
   * 
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pairec-1324***
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


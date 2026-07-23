// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateTrafficControlTaskCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The environment type. Valid values: `Daily` (daily environment), `Pre` (pre-release environment), and `Prod` (production environment).
   * 
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-test1
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


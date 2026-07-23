// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopTrafficControlFlinkTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The environment to which the instance belongs. Valid values: 
   * 
   * - Daily: daily environment.
   * 
   * - Pre: staging environment.
   * 
   * - Prod: production environment.
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


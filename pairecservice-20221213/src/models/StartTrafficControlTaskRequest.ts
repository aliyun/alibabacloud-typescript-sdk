// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTrafficControlTaskRequest extends $dara.Model {
  /**
   * @example
   * Pre
   */
  environment?: string;
  /**
   * @example
   * pairec-123***
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


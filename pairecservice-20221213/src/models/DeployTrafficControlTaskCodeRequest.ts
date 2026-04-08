// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployTrafficControlTaskCodeRequest extends $dara.Model {
  /**
   * @example
   * Daily
   */
  environment?: string;
  /**
   * @example
   * pairec-test1
   */
  instanceId?: string;
  retryDeploy?: boolean;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      instanceId: 'InstanceId',
      retryDeploy: 'RetryDeploy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      instanceId: 'string',
      retryDeploy: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


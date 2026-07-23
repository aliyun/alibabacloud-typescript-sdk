// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployTrafficControlTaskCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The deployment environment. Valid values: Daily (daily environment), Pre (pre-production environment), and Prod (production environment).
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
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to automatically retry a failed deployment.
   */
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


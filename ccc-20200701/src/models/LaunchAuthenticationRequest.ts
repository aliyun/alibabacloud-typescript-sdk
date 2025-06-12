// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LaunchAuthenticationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af145gfc-1108-4d55-8fca-f719bd512ebb
   */
  contactFlowId?: string;
  contactFlowVariables?: string;
  /**
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @example
   * agent@ccc-test
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      contactFlowVariables: 'ContactFlowVariables',
      deviceId: 'DeviceId',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      contactFlowVariables: 'string',
      deviceId: 'string',
      instanceId: 'string',
      jobId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


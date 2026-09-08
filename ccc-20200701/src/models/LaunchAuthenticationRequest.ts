// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LaunchAuthenticationRequest extends $dara.Model {
  /**
   * @remarks
   * The contact flow ID for the IVR identity verification flow.
   * 
   * This parameter is required.
   * 
   * @example
   * af145gfc-1108-4d55-8fca-f719bd512ebb
   */
  contactFlowId?: string;
  /**
   * @remarks
   * Variables passed to the contact flow. This parameter is optional. The configured variables can be retrieved and used within the IVR flow. The format is a JSON string representing a collection of key-value pairs.
   * 
   * @example
   * {
   *       "customerID": "208880281831****",
   *       "operateType": "cipherCode",
   *       "taskId": "1234567890",
   *       "crmOther": "123"
   * }
   */
  contactFlowVariables?: string;
  /**
   * @remarks
   * Device ID. This parameter is meaningless and can be filled in with any value.
   * 
   * @example
   * ACC-YUNBS-1.0.10-****
   */
  deviceId?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * job-6538214103685****
   */
  jobId?: string;
  /**
   * @remarks
   * The agent ID that initiates identity verification.
   * 
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


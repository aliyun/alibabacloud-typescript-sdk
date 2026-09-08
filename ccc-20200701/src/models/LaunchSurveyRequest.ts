// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LaunchSurveyRequest extends $dara.Model {
  /**
   * @remarks
   * The contact flow ID of the IVR satisfaction survey flow. Ensure that the specified contact flow ID corresponds to an active satisfaction survey flow.
   * 
   * @example
   * 4685b65a-eb8f-11ec-8ea0-0242ac120002
   */
  contactFlowId?: string;
  /**
   * @remarks
   * Variables passed to the contact flow. The variables configured here can be retrieved and used in the IVR flow. The format is a JSON string containing a collection of key-value pairs. This parameter is optional and defaults to empty.
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
   * Device ID. This parameter has no effect and can be filled with any value.
   * 
   * @example
   * device
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
   * job-6580466654649****
   */
  jobId?: string;
  /**
   * @remarks
   * The configuration ID for text message satisfaction. This parameter is required only when the collection channel is SMS. It is optional and defaults to empty.
   * 
   * @example
   * 4685b65a-eb8f-11ec-8ea0-0242ac120002
   */
  smsMetadataId?: string;
  /**
   * @remarks
   * The channel for collecting satisfaction feedback. This parameter is optional and defaults to Voice Satisfaction.
   * 
   * @example
   * IVR
   */
  surveyChannel?: string;
  /**
   * @remarks
   * The ID of the satisfaction survey template.
   * 
   * @example
   * 19dc793c-9a01-4cb0-b7d5-fcb5431bab6b
   */
  surveyTemplateId?: string;
  /**
   * @remarks
   * Satisfaction survey configuration.
   * 
   * @example
   * []
   */
  surveyTemplateVariables?: string;
  /**
   * @remarks
   * The agent ID that initiates the satisfaction survey.
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
      smsMetadataId: 'SmsMetadataId',
      surveyChannel: 'SurveyChannel',
      surveyTemplateId: 'SurveyTemplateId',
      surveyTemplateVariables: 'SurveyTemplateVariables',
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
      smsMetadataId: 'string',
      surveyChannel: 'string',
      surveyTemplateId: 'string',
      surveyTemplateVariables: 'string',
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


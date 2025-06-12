// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LaunchSurveyRequest extends $dara.Model {
  /**
   * @example
   * 4685b65a-eb8f-11ec-8ea0-0242ac120002
   */
  contactFlowId?: string;
  contactFlowVariables?: string;
  /**
   * @example
   * device
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
   * job-6580466654649****
   */
  jobId?: string;
  /**
   * @example
   * 4685b65a-eb8f-11ec-8ea0-0242ac120002
   */
  smsMetadataId?: string;
  /**
   * @example
   * IVR
   */
  surveyChannel?: string;
  surveyTemplateId?: string;
  surveyTemplateVariables?: string;
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


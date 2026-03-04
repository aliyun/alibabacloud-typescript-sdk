// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSubscriptionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rmq-cn-****.cn-shanghai.rmq.aliyuncs.com:8080
   */
  accessPoint?: string;
  aliyunUid?: number;
  /**
   * @example
   * ccc-event
   */
  defaultTopic?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"Name ":"StopConsultant ","Disabled ":true},{"Name ":"QueueingRerouted ","Disabled ":true},{"Name ":"IvrTracking ","Disabled ":true},{"Name ":"DualTrackRecordingReady ","Disabled ":true},{"Name ":"SatisfactionSurveyResponse ","Disabled ":true},{"Name ":"Dialing ","Disabled ":false},{"Name ":"Abandoned ","Disabled ":true},{"Name ":"QueueingCancelled ","Disabled ":true},{"Name ":"RecordingReady ","Disabled ":true},{"Name ":"StopCoach ","Disabled ":true},{"Name ":"Established ","Disabled ":true},{"Name ":"InitiateConsultant ","Disabled ":true},{"Name ":"Route2IVR ","Disabled ":false},{"Name ":"Retrieved ","Disabled ":true},{"Name ":"CampaignPaused ","Disabled ":true},{"Name ":"TextStream ","Disabled ":true},{"Name ":"AgentRelease ","Disabled ":true},{"Name ":"VoicemailReady ","Disabled ":true},{"Name ":"Released ","Disabled ":false},{"Name ":"CDRReady ","Disabled ":true},{"Name ":"CaseAttempted ","Disabled ":true},{"Name ":"AgentBreak ","Disabled ":true},{"Name ":"AgentRingingTimeout ","Disabled ":true},{"Name ":"AgentReady ","Disabled ":true},{"Name ":"CampaignResumed ","Disabled ":true},{"Name ":"AgentDialing ","Disabled ":true},{"Name ":"Ringing ","Disabled ":true},{"Name ":"StartConsultant ","Disabled ":false},{"Name ":"QueueingTimeout ","Disabled ":true},{"Name ":"AgentTalk ","Disabled ":true},{"Name ":"AgentRinging ","Disabled ":true},{"Name ":"StartMonitor ","Disabled ":true},{"Name ":"BlindTransfer ","Disabled ":true},{"Name ":"Intercept ","Disabled ":true},{"Name ":"RingingTimeout ","Disabled ":true},{"Name ":"StartConference ","Disabled ":true},{"Name ":"QueueingOverflow ","Disabled ":true},{"Name ":"BargeIn ","Disabled ":true},{"Name ":"StopConference ","Disabled ":true},{"Name ":"AgentCheckOut ","Disabled ":true},{"Name ":"CampaignSubmitted ","Disabled ":true},{"Name ":"AgentCheckIn ","Disabled ":true},{"Name ":"Enqueue ","Disabled ":false},{"Name ":"AttendedTransfer ","Disabled ":true},{"Name ":"StopMonitor ","Disabled ":true},{"Name ":"DispatchingFailure ","Disabled ":true},{"Name ":"SatisfactionSurveyOffer ","Disabled ":true},{"Name ":"CampaignCompleted ","Disabled ":true},{"Name ":"CampaignAborted ","Disabled ":true},{"Name ":"AssignAgent ","Disabled ":true},{"Name ":"Held ","Disabled ":true},{"Name ":"StartCoach ","Disabled ":true}]
   */
  eventSubscriptionsJson?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * rmq-cn-****
   */
  mqInstanceId?: string;
  /**
   * @example
   * rocketmq5
   */
  mqType?: string;
  /**
   * @example
   * password
   */
  password?: string;
  /**
   * @example
   * GID_xxx
   */
  producerId?: string;
  /**
   * @example
   * username
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      accessPoint: 'AccessPoint',
      aliyunUid: 'AliyunUid',
      defaultTopic: 'DefaultTopic',
      eventSubscriptionsJson: 'EventSubscriptionsJson',
      instanceId: 'InstanceId',
      mqInstanceId: 'MqInstanceId',
      mqType: 'MqType',
      password: 'Password',
      producerId: 'ProducerId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPoint: 'string',
      aliyunUid: 'number',
      defaultTopic: 'string',
      eventSubscriptionsJson: 'string',
      instanceId: 'string',
      mqInstanceId: 'string',
      mqType: 'string',
      password: 'string',
      producerId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


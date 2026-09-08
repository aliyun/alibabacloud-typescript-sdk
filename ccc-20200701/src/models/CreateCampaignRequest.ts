// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCampaignRequestCaseList extends $dara.Model {
  /**
   * @remarks
   * Customer-defined custom variables in JSON object format. The object can contain up to 10 properties, each with a name and value defined by the customer.
   * 
   * @example
   * {"name":"customer","客户标签":"tag"}
   */
  customVariables?: string;
  /**
   * @remarks
   * Contact phone number.
   * 
   * @example
   * 1888888888
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Business ID, an identifier from the Customer\\"s Operational System, used in integration scenarios.
   * 
   * @example
   * 01
   */
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      customVariables: 'CustomVariables',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customVariables: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCampaignRequest extends $dara.Model {
  /**
   * @remarks
   * The callable time window for the predictive outbound dialing activity, formatted as a JSON object containing two properties: beginTime and endTime. Example: [{"beginTime":"00:00:00","endTime":"23:00:00"}].
   * 
   * This parameter is required.
   * 
   * @example
   * [{"beginTime":"00:00:00","endTime":"23:00:00" }]
   */
  callableTime?: string;
  /**
   * @remarks
   * Predictive outbound dialing contact file, specified as the key of an OSS object. Obtain this key by calling the GetCaseFileUploadUrl API.
   * 
   * @example
   * ccc-test/namelist.csv
   */
  caseFileKey?: string;
  /**
   * @remarks
   * List of predictive outbound dialing contacts. This parameter cannot be used together with CaseFileKey (import from file). You must choose either file import or list import.
   */
  caseList?: CreateCampaignRequestCaseList[];
  /**
   * @remarks
   * The contact flow ID associated with the predictive outbound dialing activity.
   * 
   * This parameter is required.
   * 
   * @example
   * c1f2bc75-422e-43c7-9c9d9d95633a
   */
  contactFlowId?: string;
  /**
   * @remarks
   * The end time of the predictive outbound calling activity, formatted as a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1634313600000
   */
  endTime?: string;
  /**
   * @remarks
   * Whether to keep the activity in the executing state until it expires. The default value is false. If false, the activity automatically transitions to the completed state after all contacts have been called. If true, the activity remains in the executing state even after all contacts have been called, allowing you to append additional contacts and continue dialing until the activity expires or is manually stopped.
   * 
   * @example
   * false
   */
  executingUntilTimeout?: boolean;
  /**
   * @remarks
   * Flash SMS parameters
   * 
   * @example
   * {"applicationId":"08e6b63a-****-****-****-689a288cdbb5","templateId":"325"}
   */
  flashSmsParameters?: string;
  /**
   * @remarks
   * Phone number collection ID
   * 
   * @example
   * 0d368091-2c70-4d26-979a-6997ddc9c34f
   */
  instGroupId?: string;
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
   * The maximum number of attempts for the predictive outbound calling activity. This specifies how many times a number can be redialed if the initial call fails.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  maxAttemptCount?: number;
  /**
   * @remarks
   * The minimum redial interval for the predictive outbound calling activity, which specifies the minimum time interval between redial attempts after a failed call, in minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * Name of the predictive outbound dialing activity.
   * 
   * This parameter is required.
   * 
   * @example
   * test-campaign
   */
  name?: string;
  /**
   * @remarks
   * List of caller numbers
   */
  numberList?: string[];
  /**
   * @remarks
   * The skill group ID associated with the predictive outbound dialing activity.
   * 
   * This parameter is required.
   * 
   * @example
   * skillgroup@ccc-test
   */
  queueId?: string;
  /**
   * @remarks
   * Indicates whether this is a simulation activity used for testing. Regular customers do not need to concern themselves with this.
   * 
   * @example
   * 无
   */
  simulation?: boolean;
  /**
   * @remarks
   * Simulation parameters used for testing. Regular customers do not need to concern themselves with this.
   * 
   * @example
   * 无
   */
  simulationParameters?: string;
  /**
   * @remarks
   * The start time of the predictive outbound dialing activity, in Unix timestamp format with millisecond precision.
   * 
   * This parameter is required.
   * 
   * @example
   * 1634140800000
   */
  startTime?: string;
  /**
   * @remarks
   * Strategy parameters for the predictive outbound dialing activity. For PID strategy, an example format is: {"abandonRate":"5","historicalConnectedRate":"35"}. For PACING strategy, an example format is: {"ratio":1}. abandonRate represents the desired abandonment rate, historicalConnectedRate represents the historical reference connection rate, and ratio represents the fixed dialing ratio.
   * 
   * This parameter is required.
   * 
   * @example
   * {"ratio":1}
   */
  strategyParameters?: string;
  /**
   * @remarks
   * The strategy pattern for the predictive outbound calling activity.
   * 
   * This parameter is required.
   * 
   * @example
   * PACING
   */
  strategyType?: string;
  static names(): { [key: string]: string } {
    return {
      callableTime: 'CallableTime',
      caseFileKey: 'CaseFileKey',
      caseList: 'CaseList',
      contactFlowId: 'ContactFlowId',
      endTime: 'EndTime',
      executingUntilTimeout: 'ExecutingUntilTimeout',
      flashSmsParameters: 'FlashSmsParameters',
      instGroupId: 'InstGroupId',
      instanceId: 'InstanceId',
      maxAttemptCount: 'MaxAttemptCount',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      numberList: 'NumberList',
      queueId: 'QueueId',
      simulation: 'Simulation',
      simulationParameters: 'SimulationParameters',
      startTime: 'StartTime',
      strategyParameters: 'StrategyParameters',
      strategyType: 'StrategyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callableTime: 'string',
      caseFileKey: 'string',
      caseList: { 'type': 'array', 'itemType': CreateCampaignRequestCaseList },
      contactFlowId: 'string',
      endTime: 'string',
      executingUntilTimeout: 'boolean',
      flashSmsParameters: 'string',
      instGroupId: 'string',
      instanceId: 'string',
      maxAttemptCount: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      numberList: { 'type': 'array', 'itemType': 'string' },
      queueId: 'string',
      simulation: 'boolean',
      simulationParameters: 'string',
      startTime: 'string',
      strategyParameters: 'string',
      strategyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.caseList)) {
      $dara.Model.validateArray(this.caseList);
    }
    if(Array.isArray(this.numberList)) {
      $dara.Model.validateArray(this.numberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


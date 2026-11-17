// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCampaignRequestCases extends $dara.Model {
  /**
   * @remarks
   * The custom variables defined by the customer, formatted as a JSON object. The object can contain up to 10 properties, and the name and value of each property are defined by the customer.
   * 
   * @example
   * {"key1":"value1"}
   */
  customVariables?: string;
  /**
   * @remarks
   * The phone number of the contact.
   * 
   * @example
   * 133********
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The priority of the contact. Default value: 1.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The business ID of the contact.
   * 
   * @example
   * bizId-1
   */
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      customVariables: 'CustomVariables',
      phoneNumber: 'PhoneNumber',
      priority: 'Priority',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customVariables: 'string',
      phoneNumber: 'string',
      priority: 'string',
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
   * The call execution order. Default value: MIN_ATTEMPT_FIRST. Valid values:
   * - PRIORITY_FIRST: Prioritize by priority.
   * - MIN_ATTEMPT_FIRST: Prioritize by the number of attempts.
   * 
   * @example
   * MIN_ATTEMPT_FIRST
   */
  attemptOrder?: string;
  /**
   * @remarks
   * The callable time period for the task, formatted as a JSON object that contains two properties: beginTime and EndTime.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"beginTime":"09:00:00","endTime":"18:00:00" }]。
   */
  callableTime?: string;
  /**
   * @remarks
   * The task contact list. This is the key of an OSS object, which can be obtained by calling the GenerateFileUploadParams operation. You can also leave this parameter empty and add contacts later by calling the AppendCases operation.
   * 
   * @example
   * cases/customer.csv
   */
  caseFileKey?: string;
  /**
   * @remarks
   * The contact list. You can also leave this parameter empty and add contacts later by calling the AppendCases operation.
   */
  cases?: CreateCampaignRequestCases[];
  /**
   * @remarks
   * The outbound call timeout in seconds. Default value: 25.
   * 
   * @example
   * 25
   */
  dialingTimeoutSeconds?: number;
  /**
   * @remarks
   * The task end time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1579965079000
   */
  endTime?: number;
  /**
   * @remarks
   * The minimum concurrency. This is the minimum concurrency set for the task. A value of 0 indicates that no baseline is set, and resources are allocated based on weights.
   * 
   * If multiple campaigns have the minimum concurrency set:
   * 
   * - If the total concurrency is less than the total concurrency of the instance, the minimum concurrency of each task is prioritized, and the excess resources are allocated proportionally based on weights.
   * 
   * - If the total concurrency is greater than the total concurrency of the instance, the minimum concurrency no longer serves as a baseline, but participates in the calculation as a weight factor.
   * 
   * @example
   * 0
   */
  fixedQuota?: number;
  /**
   * @remarks
   * The flash SMS parameters.
   * 
   * @example
   * {}
   */
  flashSmsParameters?: string;
  /**
   * @remarks
   * Specifies whether to prohibit outbound calls on holidays.
   * 
   * @example
   * false
   */
  holidayRestricted?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12f3dd08-0c55-44ce-9b64-e69d35ed3a76
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of attempts, which specifies the maximum number of times to call a number when a call fails.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  maxAttemptCount?: number;
  /**
   * @remarks
   * The interval between attempts.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  minAttemptInterval?: number;
  /**
   * @remarks
   * The task name.
   * 
   * This parameter is required.
   * 
   * @example
   * Modified job group
   */
  name?: string;
  /**
   * @remarks
   * The list of calling numbers for the outbound task.
   */
  numbers?: string[];
  /**
   * @remarks
   * The list of restrictions for outbound call attempts. If this parameter is not specified, no restrictions are applied. Valid values:
   * - CALLEE_NOT_EXISTS: Do not call nonexistent numbers.
   * - OUT_OF_SERVICE: Do not call suspended numbers.
   * 
   * @example
   * None
   */
  redialRestrictions?: string;
  /**
   * @remarks
   * Specifies whether to maintain the scheduling state until the campaign end time after all contacts are called. Default value: false. Valid values:
   * - true: The task remains in the scheduling state, and you can continue to add contacts.
   * - false: The task changes to the completed state, and you cannot add contacts.
   * 
   * @example
   * false
   */
  runUntilEndTime?: boolean;
  /**
   * @remarks
   * The scenario ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aa279896-64a6-4182-864c-4f2b04ec8d17
   */
  scriptId?: string;
  /**
   * @remarks
   * The task start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1578965079000
   */
  startTime?: number;
  /**
   * @remarks
   * The weight, which is an integer ranging from 0 to 100. A larger value indicates that more concurrency is allocated during scheduling.
   * 
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      attemptOrder: 'AttemptOrder',
      callableTime: 'CallableTime',
      caseFileKey: 'CaseFileKey',
      cases: 'Cases',
      dialingTimeoutSeconds: 'DialingTimeoutSeconds',
      endTime: 'EndTime',
      fixedQuota: 'FixedQuota',
      flashSmsParameters: 'FlashSmsParameters',
      holidayRestricted: 'HolidayRestricted',
      instanceId: 'InstanceId',
      maxAttemptCount: 'MaxAttemptCount',
      minAttemptInterval: 'MinAttemptInterval',
      name: 'Name',
      numbers: 'Numbers',
      redialRestrictions: 'RedialRestrictions',
      runUntilEndTime: 'RunUntilEndTime',
      scriptId: 'ScriptId',
      startTime: 'StartTime',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attemptOrder: 'string',
      callableTime: 'string',
      caseFileKey: 'string',
      cases: { 'type': 'array', 'itemType': CreateCampaignRequestCases },
      dialingTimeoutSeconds: 'number',
      endTime: 'number',
      fixedQuota: 'number',
      flashSmsParameters: 'string',
      holidayRestricted: 'boolean',
      instanceId: 'string',
      maxAttemptCount: 'number',
      minAttemptInterval: 'number',
      name: 'string',
      numbers: { 'type': 'array', 'itemType': 'string' },
      redialRestrictions: 'string',
      runUntilEndTime: 'boolean',
      scriptId: 'string',
      startTime: 'number',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.cases)) {
      $dara.Model.validateArray(this.cases);
    }
    if(Array.isArray(this.numbers)) {
      $dara.Model.validateArray(this.numbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


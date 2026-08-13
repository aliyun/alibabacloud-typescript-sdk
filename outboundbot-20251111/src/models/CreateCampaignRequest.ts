// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCampaignRequestCases extends $dara.Model {
  /**
   * @remarks
   * The custom variables defined by the customer. The value is a JSON object that contains up to 10 properties. The name and value of each property are defined by the customer.
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
   * - PRIORITY_FIRST: priority first.
   * - MIN_ATTEMPT_FIRST: minimum attempt count first.
   * 
   * @example
   * MIN_ATTEMPT_FIRST
   */
  attemptOrder?: string;
  /**
   * @remarks
   * The callable time range for the task. The value is a JSON object that contains two properties: beginTime and EndTime.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"beginTime":"09:00:00","endTime":"18:00:00" }]。
   */
  callableTime?: string;
  /**
   * @remarks
   * The task contact list, which is an OSS object key obtained through the GenerateFileUploadParams operation. You can also leave this parameter empty and append contacts later through the AppendCases operation.
   * 
   * @example
   * cases/customer.csv
   */
  caseFileKey?: string;
  /**
   * @remarks
   * The contact list. You can also leave this parameter empty and append contacts later through the AppendCases operation.
   */
  cases?: CreateCampaignRequestCases[];
  /**
   * @remarks
   * The dialing timeout period, in seconds. Default value: 25.
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
   * The minimum concurrency for the task. A value of 0 indicates no guaranteed minimum, and resources are allocated by weight.
   * 
   * If multiple tasks have a minimum concurrency configured:
   * 
   * - If the total concurrency is less than the instance total concurrency, the minimum concurrency of each task is satisfied first, and the remaining resources are allocated proportionally by weight.
   * 
   * - If the total concurrency exceeds the instance total concurrency, the minimum concurrency no longer serves as a guaranteed minimum but is used as a weight factor in the calculation.
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
   * The maximum number of attempts. This specifies the maximum number of times a number is called when the call fails.
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
   * Updated_task_group
   */
  name?: string;
  /**
   * @remarks
   * The list of caller numbers for the outbound task.
   */
  numbers?: string[];
  /**
   * @remarks
   * The list of redial restriction conditions. If this parameter is not specified, no restrictions are applied. Valid values:
   * - CALLEE_NOT_EXISTS: Do not call nonexistent numbers.
   * - OUT_OF_SERVICE: Do not call numbers that are out of service.
   * 
   * @example
   * None
   */
  redialRestrictions?: string;
  /**
   * @remarks
   * Specifies whether to keep the scheduling state until the task end time after all contacts are called. Default value: false. Valid values:
   * - true: The task remains in the scheduling state, and you can continue to append contacts.
   * - false: The task changes to completed, and you cannot append contacts.
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
   * The weight. The value is an integer in the range of 0 to 100. A larger value indicates more concurrency allocated during scheduling.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchRobotSmartCallRequest extends $dara.Model {
  /**
   * @remarks
   * The called number. Only mobile phone numbers in the Chinese mainland are supported.
   * 
   * You can set up to 1,000 called numbers and separate the numbers with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 1390000****
   */
  calledNumber?: string;
  /**
   * @remarks
   * The number displayed to called parties, which must be a number you purchased. You can view the numbers you purchased in the [Voice Messaging Service console](https://dyvms.console.aliyun.com/dyvms.htm#/number/normal).
   * 
   * You can set up to 100 numbers and separate the numbers with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 222
   */
  calledShowNumber?: string;
  /**
   * @remarks
   * The company name, which must be the same as the **company name** specified on the [qualification management page](https://dyvms.console.aliyun.com/dyvms.htm#/corp/normal).
   * 
   * > This parameter is optional if **isSelfLine** is set to **true**.
   * 
   * @example
   * Alibaba
   */
  corpName?: string;
  /**
   * @remarks
   * The ID of the robot or communication script that is used to initiate a call.
   * 
   * You can obtain the **communication script ID** from the [Communication script management](https://dyvms.console.aliyun.com/dyvms.htm#/smart-call/saas/robot/list) page.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  dialogId?: string;
  /**
   * @remarks
   * The speech recognition identifier of early media. The default value is **false**, which means that the speech recognition identifier of early media is not enabled.
   * 
   * Set the parameter to **true** if you want to enable the speech recognition identifier of early media.
   * 
   * @example
   * true
   */
  earlyMediaAsr?: boolean;
  /**
   * @remarks
   * Specifies whether to call the self-managed line. Default value: **false**.
   * 
   * @example
   * true
   */
  isSelfLine?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether the call is scheduled. If you set this parameter to **true**, the **ScheduleTime** parameter is required.
   * 
   * @example
   * true
   */
  scheduleCall?: boolean;
  /**
   * @remarks
   * The preset call time. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * >  This parameter is required only when **ScheduleCall** is set to **true**.
   * 
   * @example
   * 12
   */
  scheduleTime?: number;
  /**
   * @remarks
   * The task name. The task name can be up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Batch Tasks
   */
  taskName?: string;
  /**
   * @remarks
   * The variable value of the TTS template, in the JSON format.
   * 
   * The variable value must correspond to a number. The TtsParam parameter must be used together with the TtsParamHead parameter.
   * 
   * @example
   * [{"number":"1390000****","params":[“Miss li”,"miss wang","Mr.li"]}]
   */
  ttsParam?: string;
  /**
   * @remarks
   * The call tasks with variables, in the JSON format.
   * 
   * The parameter value is a list of variable names. The TtsParamHead parameter must be used together with the TtsParam parameter.
   * 
   * @example
   * ["name1","name2","name3"]
   */
  ttsParamHead?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      calledShowNumber: 'CalledShowNumber',
      corpName: 'CorpName',
      dialogId: 'DialogId',
      earlyMediaAsr: 'EarlyMediaAsr',
      isSelfLine: 'IsSelfLine',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduleCall: 'ScheduleCall',
      scheduleTime: 'ScheduleTime',
      taskName: 'TaskName',
      ttsParam: 'TtsParam',
      ttsParamHead: 'TtsParamHead',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      calledShowNumber: 'string',
      corpName: 'string',
      dialogId: 'string',
      earlyMediaAsr: 'boolean',
      isSelfLine: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduleCall: 'boolean',
      scheduleTime: 'number',
      taskName: 'string',
      ttsParam: 'string',
      ttsParamHead: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


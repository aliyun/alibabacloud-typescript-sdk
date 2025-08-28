// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCallTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the task template. Valid values:
   * 
   * *   **VMS_VOICE_TTS**: the text-to-speech (TTS) notification template.
   * *   **VMS_VOICE_CODE**: the voice notification template.
   * *   **VMS_TTS**: the voice verification code template.
   * 
   * @example
   * VMS_VOICE_TTS
   */
  bizType?: string;
  /**
   * @remarks
   * The called numbers.
   * 
   * *   If you set DataType to LIST, the value of Data is in the LIST format.
   * *   If you set DataType to JSON, the value of Data is in the JSON format.
   * 
   * @example
   * { "paramNames":["name1","name2","key3"], "calleeList":[ { "callee":"131222222", "params":["zangsan","zhangsan01","zhangsan02"] }, { "callee":"131222222", "params":["zangsan","zhangsan01","zhangsan02"] }, ] }
   */
  data?: string;
  /**
   * @remarks
   * The type of called numbers. Valid values:
   * 
   * *   **LIST**: the called numbers that are separated by commas (,).
   * *   **JSON**: a JSON-formatted list of called numbers with template parameters.
   * 
   * @example
   * JSON
   */
  dataType?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  fireTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The calling number. Only virtual numbers are supported.
   * 
   * @example
   * 05516214****
   */
  resource?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the calling number. Set the value to **LIST**.
   * 
   * @example
   * LIST
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  scheduleType?: string;
  /**
   * @remarks
   * This parameter is unavailable.
   * 
   * @example
   * 1
   */
  stopTime?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Aliyun
   */
  taskName?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * TTS_2122****
   */
  templateCode?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Test Template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      data: 'Data',
      dataType: 'DataType',
      fireTime: 'FireTime',
      ownerId: 'OwnerId',
      resource: 'Resource',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      scheduleType: 'ScheduleType',
      stopTime: 'StopTime',
      taskName: 'TaskName',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      data: 'string',
      dataType: 'string',
      fireTime: 'string',
      ownerId: 'number',
      resource: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      scheduleType: 'string',
      stopTime: 'string',
      taskName: 'string',
      templateCode: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventRecordPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The types of intelligent alert events. Valid values:
   * - 0: all intelligent alert events.
   * - Multiple intelligent alert events: enter the sequence numbers of the intelligent alert events and separate them with commas (,). Example: `10001,10002`.
   * > You can specify up to 10 intelligent alert events at a time.
   * 
   * To view all types of intelligent alert events, log on to the IoT Platform console, go to the **Product Details** page, and click the **Define Feature** tab. For more information, see [View intelligent alert event types](https://help.aliyun.com/document_detail/207701.html).
   * 
   * @example
   * 1
   */
  eventTypes?: string;
  /**
   * @remarks
   * The name of the recording plan.
   * 
   * The name must be less than 48 characters in length and can contain letters, digits, and the following special characters: hyphens (-), underscores (_), at signs (@), periods (.), and colons (:).
   * 
   * This parameter is required.
   * 
   * @example
   * plan1
   */
  name?: string;
  /**
   * @remarks
   * The pre-recording duration in seconds. Default value: 0. Maximum value: 10.
   * 
   * @example
   * 5
   */
  preRecordDuration?: number;
  /**
   * @remarks
   * The recording duration in seconds, including the pre-recording duration. Valid values: 10 to 60.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  recordDuration?: number;
  /**
   * @remarks
   * The ID of the time template. You can call the [QueryTimeTemplate](https://help.aliyun.com/document_detail/107890.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fc82774fa749485bad7d719f9670****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      eventTypes: 'EventTypes',
      name: 'Name',
      preRecordDuration: 'PreRecordDuration',
      recordDuration: 'RecordDuration',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypes: 'string',
      name: 'string',
      preRecordDuration: 'number',
      recordDuration: 'number',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


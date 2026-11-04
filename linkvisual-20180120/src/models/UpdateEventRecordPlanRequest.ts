// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventRecordPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The types of intelligent alert events. Valid values:
   * 
   * - 0: All intelligent alert events.
   * - Multiple intelligent alert events: Enter the sequence numbers of the intelligent alert events and separate them with commas (,), for example, `10001,10002`.
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
   * The name of the video recording plan for intelligent alert events.
   * 
   * The name must be less than 48 characters in length and can contain letters, digits, and the following special characters: hyphens (-), underscores (_), at signs (@), periods (.), and colons (:).
   * 
   * This parameter is required.
   * 
   * @example
   * record1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the video recording plan for intelligent alert events. You can call the [QueryEventRecordPlans](https://help.aliyun.com/document_detail/107907.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5b60bf0dd55944c19d7817442bc9****
   */
  planId?: string;
  /**
   * @remarks
   * The pre-recording duration. Valid values: 0 to 10. Unit: seconds.
   * 
   * > A pre-recording duration is generated only when the device supports the pre-recording feature. Otherwise, the pre-recording duration is 0.
   * 
   * @example
   * 10
   */
  preRecordDuration?: number;
  /**
   * @remarks
   * The video recording duration, including the pre-recording duration. Valid values: 10 to 60. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  recordDuration?: number;
  /**
   * @remarks
   * The ID of the time template. You can call the [QueryTimeTemplate](https://help.aliyun.com/document_detail/107890.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 36f06322442e4e3f85a5ae8862c9****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      eventTypes: 'EventTypes',
      name: 'Name',
      planId: 'PlanId',
      preRecordDuration: 'PreRecordDuration',
      recordDuration: 'RecordDuration',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventTypes: 'string',
      name: 'string',
      planId: 'string',
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


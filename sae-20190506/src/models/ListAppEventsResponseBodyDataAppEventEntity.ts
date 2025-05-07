// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppEventsResponseBodyDataAppEventEntity extends $dara.Model {
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * @example
   * Normal
   */
  eventType?: string;
  /**
   * @remarks
   * The timestamp of the first occurrence of the event.
   * 
   * @example
   * 2020-02-19T05:01:28Z
   */
  firstTimestamp?: string;
  /**
   * @remarks
   * The timestamp of the last occurrence of the event.
   * 
   * @example
   * 2020-02-19T05:01:28Z
   */
  lastTimestamp?: string;
  /**
   * @remarks
   * The information about the event.
   * 
   * @example
   * Created container
   */
  message?: string;
  /**
   * @remarks
   * The type of the object.
   * 
   * @example
   * Pod
   */
  objectKind?: string;
  /**
   * @remarks
   * The name of the object.
   * 
   * @example
   * errew-b86bf540-b4dc-47d8-a42f-b4997c14bd8f-5595cbddd6-2****
   */
  objectName?: string;
  /**
   * @remarks
   * The cause of the event.
   * 
   * @example
   * Created
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      firstTimestamp: 'FirstTimestamp',
      lastTimestamp: 'LastTimestamp',
      message: 'Message',
      objectKind: 'ObjectKind',
      objectName: 'ObjectName',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      firstTimestamp: 'string',
      lastTimestamp: 'string',
      message: 'string',
      objectKind: 'string',
      objectName: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


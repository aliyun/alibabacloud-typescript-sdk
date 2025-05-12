// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceEventResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The returned message. The message is formatted and returned in the JSON format.
   * 
   * @example
   * {\\"versionId\\":1,\\"message\\":\\"Stage scale complete\\",\\"availableInstance\\":1,\\"unavailableInstance\\":0}
   */
  message?: string;
  /**
   * @remarks
   * The cause of the event. The information about the change in the service status is returned.
   * 
   * @example
   * Updating
   */
  reason?: string;
  /**
   * @remarks
   * The time when the event occurred. The time must be in UTC.
   * 
   * @example
   * 2022-04-09 06:30:00
   */
  time?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * *   Normal
   * *   Warning
   * 
   * @example
   * Normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      reason: 'Reason',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      reason: 'string',
      time: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


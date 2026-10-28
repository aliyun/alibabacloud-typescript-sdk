// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventInfo extends $dara.Model {
  /**
   * @remarks
   * The text content of the event.
   */
  content?: string;
  /**
   * @remarks
   * The ID of the event, which is used to obtain the related context.
   */
  id?: string;
  /**
   * @remarks
   * The ID of the pod to which the event belongs.
   * 
   * @example
   * dlc*****-master-0
   */
  podId?: string;
  /**
   * @remarks
   * The UID of the pod to which the event belongs.
   * 
   * @example
   * 94a7cc7c-0033-48b5-85bd-71c63592c268
   */
  podUid?: string;
  /**
   * @remarks
   * The timestamp of the event in UTC.
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      podId: 'PodId',
      podUid: 'PodUid',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'string',
      podId: 'string',
      podUid: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


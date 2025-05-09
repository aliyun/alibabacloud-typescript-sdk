// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataQualityEvaluationTaskInstanceTaskNotificationsNotificationsNotificationReceivers extends $dara.Model {
  /**
   * @example
   * {"atAll":"true"}
   */
  extension?: string;
  /**
   * @example
   * AliUid
   */
  receiverType?: string;
  receiverValues?: string[];
  static names(): { [key: string]: string } {
    return {
      extension: 'Extension',
      receiverType: 'ReceiverType',
      receiverValues: 'ReceiverValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extension: 'string',
      receiverType: 'string',
      receiverValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.receiverValues)) {
      $dara.Model.validateArray(this.receiverValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


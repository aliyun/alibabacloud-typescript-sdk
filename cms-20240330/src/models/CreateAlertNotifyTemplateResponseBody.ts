// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertNotifyTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the notification template.
   * 
   * @example
   * testId
   */
  alertNotifyTemplateId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8A33DBEA-*****-*****-*****-*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertNotifyTemplateId: 'alertNotifyTemplateId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNotifyTemplateId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


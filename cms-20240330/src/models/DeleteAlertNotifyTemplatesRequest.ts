// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertNotifyTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the notification templates.
   * 
   * This parameter is required.
   */
  alertNotifyTemplateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      alertNotifyTemplateIds: 'alertNotifyTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNotifyTemplateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.alertNotifyTemplateIds)) {
      $dara.Model.validateArray(this.alertNotifyTemplateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


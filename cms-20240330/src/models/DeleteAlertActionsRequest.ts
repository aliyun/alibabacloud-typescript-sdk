// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertActionsRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifiers of the alert action integrations to delete.
   * 
   * This parameter is required.
   */
  alertActionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      alertActionIds: 'alertActionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.alertActionIds)) {
      $dara.Model.validateArray(this.alertActionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


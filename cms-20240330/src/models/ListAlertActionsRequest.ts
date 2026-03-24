// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertActionsRequest extends $dara.Model {
  /**
   * @remarks
   * The unique IDs of the alert action integrations.
   */
  alertActionIds?: string[];
  /**
   * @remarks
   * The name of the alert action integration.
   * 
   * @example
   * testName
   */
  alertActionName?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the alert action integration.
   * 
   * @example
   * FC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertActionIds: 'alertActionIds',
      alertActionName: 'alertActionName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionIds: { 'type': 'array', 'itemType': 'string' },
      alertActionName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      type: 'string',
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


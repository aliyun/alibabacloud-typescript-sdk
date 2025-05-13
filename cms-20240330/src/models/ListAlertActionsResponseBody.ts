// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAlertActionsResponseBodyAlertActions } from "./ListAlertActionsResponseBodyAlertActions";


export class ListAlertActionsResponseBody extends $dara.Model {
  alertActions?: ListAlertActionsResponseBodyAlertActions[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alertActions: 'alertActions',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActions: { 'type': 'array', 'itemType': ListAlertActionsResponseBodyAlertActions },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertActions)) {
      $dara.Model.validateArray(this.alertActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


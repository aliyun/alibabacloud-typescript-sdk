// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertActionsShrinkRequest extends $dara.Model {
  alertActionIdsShrink?: string;
  alertActionName?: string;
  pageNumber?: number;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertActionIdsShrink: 'alertActionIds',
      alertActionName: 'alertActionName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionIdsShrink: 'string',
      alertActionName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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


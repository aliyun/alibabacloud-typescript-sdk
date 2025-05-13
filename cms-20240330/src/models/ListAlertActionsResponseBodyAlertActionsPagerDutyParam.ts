// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertActionsResponseBodyAlertActionsPagerDutyParam extends $dara.Model {
  key?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


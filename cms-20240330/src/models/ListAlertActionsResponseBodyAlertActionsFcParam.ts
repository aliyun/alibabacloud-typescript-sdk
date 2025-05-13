// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertActionsResponseBodyAlertActionsFcParam extends $dara.Model {
  function?: string;
  regionId?: string;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'function',
      regionId: 'regionId',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: 'string',
      regionId: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


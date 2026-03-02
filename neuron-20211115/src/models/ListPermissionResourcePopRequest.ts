// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionResourcePopRequest extends $dara.Model {
  action?: string;
  operatorId?: string;
  operatorType?: string;
  resourcePrefix?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      operatorId: 'operatorId',
      operatorType: 'operatorType',
      resourcePrefix: 'resourcePrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      operatorId: 'string',
      operatorType: 'string',
      resourcePrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


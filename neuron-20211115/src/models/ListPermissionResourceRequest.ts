// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionResourceRequest extends $dara.Model {
  action?: string;
  enterpriseId?: number;
  operatorId?: string;
  operatorType?: string;
  resourcePrefix?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      enterpriseId: 'enterpriseId',
      operatorId: 'operatorId',
      operatorType: 'operatorType',
      resourcePrefix: 'resourcePrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      enterpriseId: 'number',
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


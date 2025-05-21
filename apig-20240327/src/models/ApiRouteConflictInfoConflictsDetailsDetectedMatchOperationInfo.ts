// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiRouteConflictInfoConflictsDetailsDetectedMatchOperationInfo extends $dara.Model {
  name?: string;
  operationId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      operationId: 'operationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


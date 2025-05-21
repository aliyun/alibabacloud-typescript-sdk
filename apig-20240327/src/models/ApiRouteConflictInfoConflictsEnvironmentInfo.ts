// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApiRouteConflictInfoConflictsEnvironmentInfo extends $dara.Model {
  environmentId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


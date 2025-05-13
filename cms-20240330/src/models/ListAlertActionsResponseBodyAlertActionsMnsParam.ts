// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertActionsResponseBodyAlertActionsMnsParam extends $dara.Model {
  mnsType?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      mnsType: 'mnsType',
      name: 'name',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mnsType: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


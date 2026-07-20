// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRbacOrgUnitRequest extends $dara.Model {
  bizId?: string;
  orgUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      orgUnitId: 'OrgUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      orgUnitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRbacOrgUnitRequest extends $dara.Model {
  bizId?: string;
  orgUnitData?: string;
  orgUnitId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      orgUnitData: 'OrgUnitData',
      orgUnitId: 'OrgUnitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      orgUnitData: 'string',
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


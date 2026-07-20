// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRbacOrgUnitRequest extends $dara.Model {
  bizId?: string;
  orgUnitData?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      orgUnitData: 'OrgUnitData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      orgUnitData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRbacOrgUnitRequest extends $dara.Model {
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The organization parameters.
   * 
   * @example
   * {"name":"xx","path":"root.shanghai"}
   */
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


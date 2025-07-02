// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveUserOrgRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  static names(): { [key: string]: string } {
    return {
      endUserIds: 'EndUserIds',
      orgId: 'OrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      orgId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMembersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  memberArns?: string[];
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * w-975bcfda9625****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      memberArns: 'memberArns',
      workspaceId: 'workspaceId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberArns: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memberArns)) {
      $dara.Model.validateArray(this.memberArns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


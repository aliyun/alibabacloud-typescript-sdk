// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the external department.
   * 
   * @example
   * 123456
   */
  outerDepartmentId?: string;
  /**
   * @remarks
   * The type of the external department.
   * 
   * @example
   * type_invalid
   */
  outerDepartmentType?: string;
  /**
   * @remarks
   * The ID of the external skill group.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outerGroupId?: string;
  /**
   * @remarks
   * The name of the external skill group.
   * 
   * This parameter is required.
   * 
   * @example
   * Hotline skill group
   */
  outerGroupName?: string;
  /**
   * @remarks
   * The type of the external skill group.
   * 
   * This parameter is required.
   * 
   * @example
   * mybank
   */
  outerGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      outerDepartmentId: 'OuterDepartmentId',
      outerDepartmentType: 'OuterDepartmentType',
      outerGroupId: 'OuterGroupId',
      outerGroupName: 'OuterGroupName',
      outerGroupType: 'OuterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerDepartmentId: 'string',
      outerDepartmentType: 'string',
      outerGroupId: 'string',
      outerGroupName: 'string',
      outerGroupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


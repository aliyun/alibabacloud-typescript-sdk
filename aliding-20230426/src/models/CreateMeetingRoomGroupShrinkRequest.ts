// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMeetingRoomGroupShrinkRequest extends $dara.Model {
  /**
   * @example
   * 测试分组
   */
  groupName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 172L
   */
  parentGroupId?: number;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      parentGroupId: 'ParentGroupId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      parentGroupId: 'number',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


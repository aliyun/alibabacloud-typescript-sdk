// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMeetingRoomGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 172
   */
  groupId?: string;
  /**
   * @example
   * 测试分组
   */
  groupName?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
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


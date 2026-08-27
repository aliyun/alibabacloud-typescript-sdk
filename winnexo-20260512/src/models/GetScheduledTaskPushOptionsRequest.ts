// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledTaskPushOptionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the collaboration group (such as cg_101). If specified, a group workspace task is created (the caller must be a valid group member). If left empty, a personal task is created.
   * 
   * @example
   * cg_401
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The name of the currently active digital employee. This value is empty if not configured.
   * 
   * @example
   * exampleDigitalEmployeeName
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass it explicitly with --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      digitalEmployeeName: 'digitalEmployeeName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      digitalEmployeeName: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


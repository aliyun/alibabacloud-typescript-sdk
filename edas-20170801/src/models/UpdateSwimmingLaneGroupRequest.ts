// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSwimmingLaneGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The list of application IDs related to the lane group.
   * 
   * @example
   * 8e7689af-6ddd-4676-8ee6-5fbecdf2****,f72deaac-26ba-429a-948d-5fa47c4a****,5049d2c8-f997-4fc9-92a2-153506a6****,99a2d4b5-99a5-4e25-a964-1bd03a17****
   */
  appIds?: string;
  /**
   * @remarks
   * The ingress application. The application is in the EDAS:{application ID} format.
   * 
   * @example
   * EDAS:dd2690a7-3fe4-4975-9a4c-5a60ffd6****
   */
  entryApp?: string;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * This parameter is required.
   * 
   * @example
   * 98
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the lane group.
   * 
   * @example
   * test-swimlanegroup
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
      entryApp: 'EntryApp',
      groupId: 'GroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
      entryApp: 'string',
      groupId: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


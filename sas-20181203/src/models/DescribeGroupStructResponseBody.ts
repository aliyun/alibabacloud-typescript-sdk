// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupStructResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parent node of the group.
   * 
   * @example
   * 958****
   */
  groupFather?: number;
  /**
   * @remarks
   * The type of the server group. Valid values:
   * 
   * *   **0**: the default group
   * *   **1**: other groups
   * 
   * @example
   * 0
   */
  groupFlag?: number;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * 958****
   */
  groupId?: number;
  /**
   * @remarks
   * The sequence number.
   * 
   * @example
   * 1
   */
  groupIndex?: number;
  /**
   * @remarks
   * The level of the application group.
   * 
   * @example
   * 2
   */
  groupLevel?: number;
  /**
   * @remarks
   * The name of the server group.
   * 
   * @example
   * TestGroupName
   */
  groupName?: string;
  /**
   * @remarks
   * An array that consists of child groups.
   */
  groups?: string[];
  /**
   * @remarks
   * The number of servers in the group.
   * 
   * @example
   * 30
   */
  machineNum?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9FBC6E47-7508-58C9-9E76-528E118C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupFather: 'GroupFather',
      groupFlag: 'GroupFlag',
      groupId: 'GroupId',
      groupIndex: 'GroupIndex',
      groupLevel: 'GroupLevel',
      groupName: 'GroupName',
      groups: 'Groups',
      machineNum: 'MachineNum',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupFather: 'number',
      groupFlag: 'number',
      groupId: 'number',
      groupIndex: 'number',
      groupLevel: 'number',
      groupName: 'string',
      groups: { 'type': 'array', 'itemType': 'string' },
      machineNum: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


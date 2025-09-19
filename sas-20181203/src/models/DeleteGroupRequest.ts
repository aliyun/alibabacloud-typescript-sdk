// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the server group that you want to delete.
   * 
   * >  To delete a server group, you must provide the ID of the server group. You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9454789
   */
  groupId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.172.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


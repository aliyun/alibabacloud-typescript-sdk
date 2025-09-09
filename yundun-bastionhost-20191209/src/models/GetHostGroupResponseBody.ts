// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHostGroupResponseBodyHostGroup extends $dara.Model {
  /**
   * @remarks
   * The remarks of the asset group.
   * 
   * @example
   * Description
   */
  comment?: string;
  /**
   * @remarks
   * The asset group ID.
   * 
   * @example
   * 1
   */
  hostGroupId?: string;
  /**
   * @remarks
   * The name of the asset group.
   * 
   * @example
   * Host group 1
   */
  hostGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      hostGroupId: 'HostGroupId',
      hostGroupName: 'HostGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      hostGroupId: 'string',
      hostGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned detailed information about the asset group.
   */
  hostGroup?: GetHostGroupResponseBodyHostGroup;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hostGroup: 'HostGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostGroup: GetHostGroupResponseBodyHostGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.hostGroup && typeof (this.hostGroup as any).validate === 'function') {
      (this.hostGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


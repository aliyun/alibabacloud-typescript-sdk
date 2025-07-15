// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLiveMessageUserInfoResponseBodyFailList extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 440
   */
  code?: number;
  /**
   * @remarks
   * The ID of the group to which the user belongs. For failed modification, the information of the user is not updated when you query the users in the group. You can try again after you check the failure reason and fix the issue.
   * 
   * @example
   * grouptest2
   */
  groupId?: string;
  /**
   * @remarks
   * The reason why the information of the user failed to be modified.
   * 
   * @example
   * group not exists or already deleted
   */
  reason?: string;
  /**
   * @remarks
   * Indicates whether the group to which the user belongs is modified. In this case, the group is not modified.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      groupId: 'GroupId',
      reason: 'Reason',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      groupId: 'string',
      reason: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLiveMessageUserInfoResponseBodySuccessList extends $dara.Model {
  /**
   * @remarks
   * The ID of the group to which the user belongs. For successful modification, the information of the user is updated when you query the users in the group.
   * 
   * @example
   * grouptest1
   */
  groupId?: string;
  /**
   * @remarks
   * Indicates whether the group to which the user belongs is modified. In this case, the group is modified.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyLiveMessageUserInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The users whose information failed to be modified.
   */
  failList?: ModifyLiveMessageUserInfoResponseBodyFailList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3271ACD2-F143-1204-AFDB-9A87C131****
   */
  requestId?: string;
  /**
   * @remarks
   * The users whose information was modified.
   */
  successList?: ModifyLiveMessageUserInfoResponseBodySuccessList[];
  static names(): { [key: string]: string } {
    return {
      failList: 'FailList',
      requestId: 'RequestId',
      successList: 'SuccessList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failList: { 'type': 'array', 'itemType': ModifyLiveMessageUserInfoResponseBodyFailList },
      requestId: 'string',
      successList: { 'type': 'array', 'itemType': ModifyLiveMessageUserInfoResponseBodySuccessList },
    };
  }

  validate() {
    if(Array.isArray(this.failList)) {
      $dara.Model.validateArray(this.failList);
    }
    if(Array.isArray(this.successList)) {
      $dara.Model.validateArray(this.successList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


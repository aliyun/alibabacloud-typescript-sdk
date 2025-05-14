// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserResponseBodyDeptOrderList } from "./GetUserResponseBodyDeptOrderList";
import { GetUserResponseBodyLeaderInDept } from "./GetUserResponseBodyLeaderInDept";
import { GetUserResponseBodyRoleList } from "./GetUserResponseBodyRoleList";
import { GetUserResponseBodyUnionEmpExt } from "./GetUserResponseBodyUnionEmpExt";


export class GetUserResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  /**
   * @example
   * true
   */
  admin?: boolean;
  /**
   * @example
   * xxx
   */
  avatar?: string;
  /**
   * @example
   * true
   */
  boss?: boolean;
  /**
   * @example
   * [2,3,4]
   */
  deptIdList?: number[];
  deptOrderList?: GetUserResponseBodyDeptOrderList[];
  /**
   * @example
   * test@xxx.com
   */
  email?: string;
  /**
   * @example
   * true
   */
  exclusiveAccount?: boolean;
  /**
   * @example
   * dingxxx
   */
  exclusiveAccountCorpId?: string;
  /**
   * @example
   * 组织名称
   */
  exclusiveAccountCorpName?: string;
  /**
   * @example
   * dingtalk
   */
  exclusiveAccountType?: string;
  /**
   * @example
   * {"爱好":"旅游","年龄":"24"}
   */
  extension?: string;
  /**
   * @example
   * false
   */
  hideMobile?: boolean;
  /**
   * @example
   * 1597573616828
   */
  hiredDate?: number;
  /**
   * @example
   * 4
   */
  jobNumber?: string;
  leaderInDept?: GetUserResponseBodyLeaderInDept[];
  /**
   * @example
   * login_id3
   */
  loginId?: string;
  /**
   * @example
   * manager240
   */
  managerUserid?: string;
  /**
   * @example
   * 18513027676
   */
  mobile?: string;
  /**
   * @example
   * 张三
   */
  name?: string;
  /**
   * @example
   * 昵称
   */
  nickname?: string;
  /**
   * @example
   * test@xxx.com
   */
  orgEmail?: string;
  /**
   * @example
   * true
   */
  realAuthed?: boolean;
  /**
   * @example
   * 备注备注
   */
  remark?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  roleList?: GetUserResponseBodyRoleList[];
  /**
   * @example
   * true
   */
  senior?: boolean;
  /**
   * @example
   * 86
   */
  stateCode?: string;
  /**
   * @example
   * 010-86123456-2345
   */
  telephone?: string;
  /**
   * @example
   * 技术总监
   */
  title?: string;
  unionEmpExt?: GetUserResponseBodyUnionEmpExt;
  unionid?: string;
  /**
   * @example
   * zhangsan
   */
  userid?: string;
  /**
   * @example
   * 未来park
   */
  workPlace?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      admin: 'admin',
      avatar: 'avatar',
      boss: 'boss',
      deptIdList: 'deptIdList',
      deptOrderList: 'deptOrderList',
      email: 'email',
      exclusiveAccount: 'exclusiveAccount',
      exclusiveAccountCorpId: 'exclusiveAccountCorpId',
      exclusiveAccountCorpName: 'exclusiveAccountCorpName',
      exclusiveAccountType: 'exclusiveAccountType',
      extension: 'extension',
      hideMobile: 'hideMobile',
      hiredDate: 'hiredDate',
      jobNumber: 'jobNumber',
      leaderInDept: 'leaderInDept',
      loginId: 'loginId',
      managerUserid: 'managerUserid',
      mobile: 'mobile',
      name: 'name',
      nickname: 'nickname',
      orgEmail: 'orgEmail',
      realAuthed: 'realAuthed',
      remark: 'remark',
      requestId: 'requestId',
      roleList: 'roleList',
      senior: 'senior',
      stateCode: 'stateCode',
      telephone: 'telephone',
      title: 'title',
      unionEmpExt: 'unionEmpExt',
      unionid: 'unionid',
      userid: 'userid',
      workPlace: 'workPlace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      admin: 'boolean',
      avatar: 'string',
      boss: 'boolean',
      deptIdList: { 'type': 'array', 'itemType': 'number' },
      deptOrderList: { 'type': 'array', 'itemType': GetUserResponseBodyDeptOrderList },
      email: 'string',
      exclusiveAccount: 'boolean',
      exclusiveAccountCorpId: 'string',
      exclusiveAccountCorpName: 'string',
      exclusiveAccountType: 'string',
      extension: 'string',
      hideMobile: 'boolean',
      hiredDate: 'number',
      jobNumber: 'string',
      leaderInDept: { 'type': 'array', 'itemType': GetUserResponseBodyLeaderInDept },
      loginId: 'string',
      managerUserid: 'string',
      mobile: 'string',
      name: 'string',
      nickname: 'string',
      orgEmail: 'string',
      realAuthed: 'boolean',
      remark: 'string',
      requestId: 'string',
      roleList: { 'type': 'array', 'itemType': GetUserResponseBodyRoleList },
      senior: 'boolean',
      stateCode: 'string',
      telephone: 'string',
      title: 'string',
      unionEmpExt: GetUserResponseBodyUnionEmpExt,
      unionid: 'string',
      userid: 'string',
      workPlace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deptIdList)) {
      $dara.Model.validateArray(this.deptIdList);
    }
    if(Array.isArray(this.deptOrderList)) {
      $dara.Model.validateArray(this.deptOrderList);
    }
    if(Array.isArray(this.leaderInDept)) {
      $dara.Model.validateArray(this.leaderInDept);
    }
    if(Array.isArray(this.roleList)) {
      $dara.Model.validateArray(this.roleList);
    }
    if(this.unionEmpExt && typeof (this.unionEmpExt as any).validate === 'function') {
      (this.unionEmpExt as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


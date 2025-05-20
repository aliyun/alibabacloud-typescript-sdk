// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PermissionConditionIpEquals } from "./PermissionConditionIpEquals";
import { PermissionConditionIpNotEquals } from "./PermissionConditionIpNotEquals";
import { PermissionConditionStringLike } from "./PermissionConditionStringLike";
import { PermissionConditionStringNotLike } from "./PermissionConditionStringNotLike";


export class PermissionCondition extends $dara.Model {
  ipEquals?: PermissionConditionIpEquals;
  ipNotEquals?: PermissionConditionIpNotEquals;
  stringLike?: PermissionConditionStringLike;
  stringNotLike?: PermissionConditionStringNotLike;
  static names(): { [key: string]: string } {
    return {
      ipEquals: 'ip_equals',
      ipNotEquals: 'ip_not_equals',
      stringLike: 'string_like',
      stringNotLike: 'string_not_like',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipEquals: PermissionConditionIpEquals,
      ipNotEquals: PermissionConditionIpNotEquals,
      stringLike: PermissionConditionStringLike,
      stringNotLike: PermissionConditionStringNotLike,
    };
  }

  validate() {
    if(this.ipEquals && typeof (this.ipEquals as any).validate === 'function') {
      (this.ipEquals as any).validate();
    }
    if(this.ipNotEquals && typeof (this.ipNotEquals as any).validate === 'function') {
      (this.ipNotEquals as any).validate();
    }
    if(this.stringLike && typeof (this.stringLike as any).validate === 'function') {
      (this.stringLike as any).validate();
    }
    if(this.stringNotLike && typeof (this.stringNotLike as any).validate === 'function') {
      (this.stringNotLike as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


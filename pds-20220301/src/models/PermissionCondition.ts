// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PermissionConditionBoolEquals extends $dara.Model {
  isShareLink?: boolean;
  static names(): { [key: string]: string } {
    return {
      isShareLink: 'is_share_link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isShareLink: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionConditionBoolNotEquals extends $dara.Model {
  isShareLink?: boolean;
  static names(): { [key: string]: string } {
    return {
      isShareLink: 'is_share_link',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isShareLink: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionConditionIpEquals extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   */
  clientIp?: string[];
  static names(): { [key: string]: string } {
    return {
      clientIp: 'client_ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clientIp)) {
      $dara.Model.validateArray(this.clientIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionConditionIpNotEquals extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   */
  clientIp?: string[];
  static names(): { [key: string]: string } {
    return {
      clientIp: 'client_ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.clientIp)) {
      $dara.Model.validateArray(this.clientIp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionConditionStringLike extends $dara.Model {
  /**
   * @remarks
   * The vpcID of the client as a string match condition.
   */
  vpcId?: string[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpc_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vpcId)) {
      $dara.Model.validateArray(this.vpcId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionConditionStringNotLike extends $dara.Model {
  /**
   * @remarks
   * The vpcID of the client as a string match condition.
   */
  vpcId?: string[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpc_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vpcId)) {
      $dara.Model.validateArray(this.vpcId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermissionCondition extends $dara.Model {
  boolEquals?: PermissionConditionBoolEquals;
  boolNotEquals?: PermissionConditionBoolNotEquals;
  /**
   * @remarks
   * The IP address condition, which is true when the IP address is equal to one of the following lists.
   */
  ipEquals?: PermissionConditionIpEquals;
  /**
   * @remarks
   * The IP address condition. This condition is true when the IP address is not equal to any of the following list.
   */
  ipNotEquals?: PermissionConditionIpNotEquals;
  /**
   * @remarks
   * The string match condition, which is true when the string is equal to one of the following lists.
   */
  stringLike?: PermissionConditionStringLike;
  /**
   * @remarks
   * The string match condition. This condition is true when the input string is not equal to any one of the following lists.
   */
  stringNotLike?: PermissionConditionStringNotLike;
  static names(): { [key: string]: string } {
    return {
      boolEquals: 'bool_equals',
      boolNotEquals: 'bool_not_equals',
      ipEquals: 'ip_equals',
      ipNotEquals: 'ip_not_equals',
      stringLike: 'string_like',
      stringNotLike: 'string_not_like',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boolEquals: PermissionConditionBoolEquals,
      boolNotEquals: PermissionConditionBoolNotEquals,
      ipEquals: PermissionConditionIpEquals,
      ipNotEquals: PermissionConditionIpNotEquals,
      stringLike: PermissionConditionStringLike,
      stringNotLike: PermissionConditionStringNotLike,
    };
  }

  validate() {
    if(this.boolEquals && typeof (this.boolEquals as any).validate === 'function') {
      (this.boolEquals as any).validate();
    }
    if(this.boolNotEquals && typeof (this.boolNotEquals as any).validate === 'function') {
      (this.boolNotEquals as any).validate();
    }
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


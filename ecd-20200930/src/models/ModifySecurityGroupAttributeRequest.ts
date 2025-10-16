// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySecurityGroupAttributeRequestAuthorizeEgress extends $dara.Model {
  description?: string;
  destCidrIp?: string;
  ipProtocol?: string;
  nicType?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidrIp: 'DestCidrIp',
      ipProtocol: 'IpProtocol',
      nicType: 'NicType',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidrIp: 'string',
      ipProtocol: 'string',
      nicType: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupAttributeRequestAuthorizeIngress extends $dara.Model {
  description?: string;
  destCidrIp?: string;
  ipProtocol?: string;
  nicType?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidrIp: 'DestCidrIp',
      ipProtocol: 'IpProtocol',
      nicType: 'NicType',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidrIp: 'string',
      ipProtocol: 'string',
      nicType: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupAttributeRequestRevokeEgress extends $dara.Model {
  description?: string;
  destCidrIp?: string;
  ipProtocol?: string;
  nicType?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidrIp: 'DestCidrIp',
      ipProtocol: 'IpProtocol',
      nicType: 'NicType',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidrIp: 'string',
      ipProtocol: 'string',
      nicType: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupAttributeRequestRevokeIngress extends $dara.Model {
  description?: string;
  destCidrIp?: string;
  ipProtocol?: string;
  nicType?: string;
  policy?: string;
  portRange?: string;
  priority?: string;
  sourceCidrIp?: string;
  sourcePortRange?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidrIp: 'DestCidrIp',
      ipProtocol: 'IpProtocol',
      nicType: 'NicType',
      policy: 'Policy',
      portRange: 'PortRange',
      priority: 'Priority',
      sourceCidrIp: 'SourceCidrIp',
      sourcePortRange: 'SourcePortRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidrIp: 'string',
      ipProtocol: 'string',
      nicType: 'string',
      policy: 'string',
      portRange: 'string',
      priority: 'string',
      sourceCidrIp: 'string',
      sourcePortRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifySecurityGroupAttributeRequest extends $dara.Model {
  authorizeEgress?: ModifySecurityGroupAttributeRequestAuthorizeEgress[];
  authorizeIngress?: ModifySecurityGroupAttributeRequestAuthorizeIngress[];
  /**
   * @remarks
   * This parameter is required.
   */
  officeSiteId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  revokeEgress?: ModifySecurityGroupAttributeRequestRevokeEgress[];
  revokeIngress?: ModifySecurityGroupAttributeRequestRevokeIngress[];
  static names(): { [key: string]: string } {
    return {
      authorizeEgress: 'AuthorizeEgress',
      authorizeIngress: 'AuthorizeIngress',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      revokeEgress: 'RevokeEgress',
      revokeIngress: 'RevokeIngress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeEgress: { 'type': 'array', 'itemType': ModifySecurityGroupAttributeRequestAuthorizeEgress },
      authorizeIngress: { 'type': 'array', 'itemType': ModifySecurityGroupAttributeRequestAuthorizeIngress },
      officeSiteId: 'string',
      regionId: 'string',
      revokeEgress: { 'type': 'array', 'itemType': ModifySecurityGroupAttributeRequestRevokeEgress },
      revokeIngress: { 'type': 'array', 'itemType': ModifySecurityGroupAttributeRequestRevokeIngress },
    };
  }

  validate() {
    if(Array.isArray(this.authorizeEgress)) {
      $dara.Model.validateArray(this.authorizeEgress);
    }
    if(Array.isArray(this.authorizeIngress)) {
      $dara.Model.validateArray(this.authorizeIngress);
    }
    if(Array.isArray(this.revokeEgress)) {
      $dara.Model.validateArray(this.revokeEgress);
    }
    if(Array.isArray(this.revokeIngress)) {
      $dara.Model.validateArray(this.revokeIngress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


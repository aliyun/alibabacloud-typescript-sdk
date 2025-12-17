// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSourceRequestK8sSourceConfigAuthorizeSecurityGroupRules extends $dara.Model {
  description?: string;
  portRanges?: string[];
  /**
   * @example
   * sg-bp14w4fa4j***
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      portRanges: 'portRanges',
      securityGroupId: 'securityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      portRanges: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSourceRequestK8sSourceConfig extends $dara.Model {
  authorizeSecurityGroupRules?: CreateSourceRequestK8sSourceConfigAuthorizeSecurityGroupRules[];
  /**
   * @example
   * c3fbe6caaaece4062b*****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeSecurityGroupRules: 'authorizeSecurityGroupRules',
      clusterId: 'clusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeSecurityGroupRules: { 'type': 'array', 'itemType': CreateSourceRequestK8sSourceConfigAuthorizeSecurityGroupRules },
      clusterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizeSecurityGroupRules)) {
      $dara.Model.validateArray(this.authorizeSecurityGroupRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSourceRequestNacosSourceConfig extends $dara.Model {
  /**
   * @example
   * mse-cn-0dw3w***
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSourceRequest extends $dara.Model {
  /**
   * @example
   * gw-cq7l5s5lhtgi6q***
   */
  gatewayId?: string;
  k8sSourceConfig?: CreateSourceRequestK8sSourceConfig;
  nacosSourceConfig?: CreateSourceRequestNacosSourceConfig;
  resourceGroupId?: string;
  /**
   * @example
   * MSE_NACOS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      k8sSourceConfig: 'k8sSourceConfig',
      nacosSourceConfig: 'nacosSourceConfig',
      resourceGroupId: 'resourceGroupId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      k8sSourceConfig: CreateSourceRequestK8sSourceConfig,
      nacosSourceConfig: CreateSourceRequestNacosSourceConfig,
      resourceGroupId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.k8sSourceConfig && typeof (this.k8sSourceConfig as any).validate === 'function') {
      (this.k8sSourceConfig as any).validate();
    }
    if(this.nacosSourceConfig && typeof (this.nacosSourceConfig as any).validate === 'function') {
      (this.nacosSourceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


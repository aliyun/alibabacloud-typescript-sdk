// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceProvisionsResponseBodyServiceProvisionsCommodityProvisions extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * acs_postpaid_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The URL for activating the commodity.
   * 
   * @example
   * https://common-buy.aliyun.com/?commodityCode=acs_postpaid_public_cn
   */
  enableURL?: string;
  /**
   * @remarks
   * The activation status of the Alibaba Cloud service. Valid values:
   * 
   * - Enabled: The service is activated.
   * 
   * - Disabled: The service is not activated.
   * 
   * @example
   * Disabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      enableURL: 'EnableURL',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      enableURL: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRolesApiForCreation extends $dara.Model {
  /**
   * @remarks
   * The name of the API operation.
   * 
   * @example
   * CreateServiceLinkedRole
   */
  apiName?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud service to which the API operation belongs.
   * 
   * @example
   * rds
   */
  apiProductId?: string;
  /**
   * @remarks
   * The type of the API operation. Valid values:
   * 
   * - Open: an Alibaba Cloud API operation.
   * 
   * - Inner: an internal API operation.
   * 
   * @example
   * Open
   */
  apiType?: string;
  /**
   * @remarks
   * The parameters of the API operation. The value of a parameter is a dynamic value. The following dynamic value is supported: ${RegionId}, which indicates the region ID.
   * 
   * @example
   * {   "ServiceLinkedRole": "AliyunServiceRoleForRdsPgsqlOnEcs",   "RegionId": "${RegionId}" }
   */
  parameters?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiProductId: 'ApiProductId',
      apiType: 'ApiType',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiProductId: 'string',
      apiType: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles extends $dara.Model {
  /**
   * @remarks
   * The information about the API operation that is used to create the role.
   */
  apiForCreation?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRolesApiForCreation;
  /**
   * @remarks
   * Indicates whether the service-linked role is created. Valid values:
   * 
   * - true: The service-linked role is created.
   * 
   * - false: The service-linked role is not created.
   * 
   * @example
   * true
   */
  created?: boolean;
  /**
   * @remarks
   * The purpose of the role. Default value: Default. This value indicates that the role is the default role of the service.
   * 
   * @example
   * Default
   */
  function?: string;
  /**
   * @remarks
   * The name of the service-linked role.
   * 
   * @example
   * AliyunServiceRoleForEHPC
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      apiForCreation: 'ApiForCreation',
      created: 'Created',
      function: 'Function',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiForCreation: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRolesApiForCreation,
      created: 'boolean',
      function: 'string',
      roleName: 'string',
    };
  }

  validate() {
    if(this.apiForCreation && typeof (this.apiForCreation as any).validate === 'function') {
      (this.apiForCreation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision extends $dara.Model {
  /**
   * @remarks
   * The URL that you can use to grant permissions to the service-linked role.
   * 
   * > This parameter is returned only when the value of Created is false.
   * 
   * @example
   * https://ehpc.console.aliyun.com/
   */
  authorizationURL?: string;
  /**
   * @remarks
   * The service-linked roles.
   */
  roles?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles[];
  static names(): { [key: string]: string } {
    return {
      authorizationURL: 'AuthorizationURL',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationURL: 'string',
      roles: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRoles },
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBodyServiceProvisions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service is automatically activated when the template is used to create a stack. Valid values:
   * 
   * - true: The service is automatically activated.
   * 
   * - false: The service is not automatically activated.
   * 
   * @example
   * false
   */
  autoEnableService?: boolean;
  /**
   * @remarks
   * The details of the commodity. Some services, such as Container Compute Service (ACS), require you to activate multiple commodities.
   */
  commodityProvisions?: GetServiceProvisionsResponseBodyServiceProvisionsCommodityProvisions[];
  /**
   * @remarks
   * The services on which the service that you want to query depends.
   */
  dependentServiceNames?: string[];
  /**
   * @remarks
   * The URL that you can use to activate the Alibaba Cloud service.
   * 
   * > This parameter is returned only when the value of Status is Disabled.
   * 
   * @example
   * https://common-buy.aliyun.com/?commodityCode=nas
   */
  enableURL?: string;
  /**
   * @remarks
   * The information about the service-linked roles of the Alibaba Cloud service. If this parameter is empty, no service-linked role is associated with the service.
   */
  roleProvision?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision;
  /**
   * @remarks
   * The name of the Alibaba Cloud service.
   * 
   * @example
   * EHPC
   */
  serviceName?: string;
  /**
   * @remarks
   * The activation status of the Alibaba Cloud service. Valid values:
   * 
   * - Enabled: The service is activated.
   * 
   * - Disabled: The service is not activated.
   * 
   * - Unknown: The activation status is unknown.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The reason why the Alibaba Cloud service is not activated or the activation status is unknown.
   * 
   * > This parameter is returned only when the value of Status is Disabled or Unknown.
   * 
   * @example
   * No permission.
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      autoEnableService: 'AutoEnableService',
      commodityProvisions: 'CommodityProvisions',
      dependentServiceNames: 'DependentServiceNames',
      enableURL: 'EnableURL',
      roleProvision: 'RoleProvision',
      serviceName: 'ServiceName',
      status: 'Status',
      statusReason: 'StatusReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoEnableService: 'boolean',
      commodityProvisions: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisionsCommodityProvisions },
      dependentServiceNames: { 'type': 'array', 'itemType': 'string' },
      enableURL: 'string',
      roleProvision: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision,
      serviceName: 'string',
      status: 'string',
      statusReason: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commodityProvisions)) {
      $dara.Model.validateArray(this.commodityProvisions);
    }
    if(Array.isArray(this.dependentServiceNames)) {
      $dara.Model.validateArray(this.dependentServiceNames);
    }
    if(this.roleProvision && typeof (this.roleProvision as any).validate === 'function') {
      (this.roleProvision as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvisionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A9938C04-26AD-5EFA-B394-EA7866842DFF
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the Alibaba Cloud services.
   */
  serviceProvisions?: GetServiceProvisionsResponseBodyServiceProvisions[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceProvisions: 'ServiceProvisions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceProvisions: { 'type': 'array', 'itemType': GetServiceProvisionsResponseBodyServiceProvisions },
    };
  }

  validate() {
    if(Array.isArray(this.serviceProvisions)) {
      $dara.Model.validateArray(this.serviceProvisions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


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
   * GetServiceProvisions
   */
  apiName?: string;
  /**
   * @remarks
   * The ID of the product to which the API operation belongs.
   * 
   * @example
   * ComputeNest
   */
  apiProductId?: string;
  /**
   * @remarks
   * The type of the API operation. Valid values:
   * 
   * - Open: a public API operation.
   * 
   * - Inner: an internal API operation.
   * 
   * @example
   * Open
   */
  apiType?: string;
  /**
   * @remarks
   * The parameters of the API operation. Dynamic parameters are in the \\`${Variable}\\` format. The \\`${RegionId}\\` dynamic parameter is supported, which specifies the region.
   * 
   * @example
   * { "ServiceLinkedRole": "AliyunServiceRoleForRdsPgsqlOnEcs", "RegionId": "${RegionId}" }
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
   * Indicates whether the role is created. Valid values:
   * 
   * - true: The role is created.
   * 
   * - false: The role is not created.
   * 
   * @example
   * true
   */
  created?: boolean;
  /**
   * @remarks
   * The purpose of the role. Default value: Default. This value indicates that the role is the default role for the service.
   * 
   * @example
   * Default
   */
  function?: string;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * AliyunServiceRole
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
   * The URL for authorizing the service to access cloud resources. This parameter is returned if the role is not created.
   * 
   * @example
   * https://ram.console.aliyun.com/role/authorization?request={"Services":[{"Service":"CS","Roles":[{"RoleName":"AliyunCSManagedVKRole","TemplateId":"AliyunCSManagedVKRole"},{"RoleName":"AliyunCSDefaultRole","TemplateId":"Default"}]}],"ReturnUrl":"https://cs.console.aliyun.com/"}
   */
  authorizationURL?: string;
  /**
   * @remarks
   * The list of service roles.
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
   * Indicates whether the service is automatically activated. The service is automatically activated if it is defined in the template. Valid values:
   * 
   * - true: The service is automatically activated.
   * 
   * - false: The service must be manually activated.
   * 
   * @example
   * true
   */
  autoEnableService?: boolean;
  /**
   * @remarks
   * The details of the commodity. Some services, such as ACS, require you to activate multiple commodities.
   */
  commodityProvisions?: GetServiceProvisionsResponseBodyServiceProvisionsCommodityProvisions[];
  /**
   * @remarks
   * The URL for activating the Alibaba Cloud service.
   * 
   * > This parameter is returned when Status is set to Disabled.
   * 
   * @example
   * https://common-buy.aliyun.com/?commodityCode=sls
   */
  enableURL?: string;
  /**
   * @remarks
   * The information about the service roles. If this parameter is empty, no service roles are associated with the service.
   */
  roleProvision?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * db
   */
  serviceName?: string;
  /**
   * @remarks
   * The activation status of the service. Valid values:
   * 
   * - Enabled: The service is activated.
   * 
   * - EnabledByDefault: The service is activated by default.
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
   * > This parameter is returned when Status is set to Unknown.
   * 
   * @example
   * resource(Eip) import info missing
   */
  statusReason?: string;
  static names(): { [key: string]: string } {
    return {
      autoEnableService: 'AutoEnableService',
      commodityProvisions: 'CommodityProvisions',
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
   * DB1FA13E-1087-5654-84D5-58A0ACAD1B18
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the service.
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


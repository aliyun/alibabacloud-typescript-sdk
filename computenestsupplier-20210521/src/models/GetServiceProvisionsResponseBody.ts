// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceProvisionsResponseBodyServiceProvisionsCommodityProvisions extends $dara.Model {
  /**
   * @remarks
   * Commodity Code
   * 
   * @example
   * acs_postpaid_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * Product activation link.
   * 
   * @example
   * https://common-buy.aliyun.com/?commodityCode=acs_postpaid_public_cn
   */
  enableURL?: string;
  /**
   * @remarks
   * Cloud service activation status.
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
   * The ID of the Alibaba Cloud service to which the API operation belongs.
   * 
   * @example
   * ComputeNest
   */
  apiProductId?: string;
  /**
   * @remarks
   * The type of the API operation. Valid values:
   * 
   * *   Open: public
   * *   Inner: private
   * 
   * @example
   * Open
   */
  apiType?: string;
  /**
   * @remarks
   * The parameters of the API operation. ${Variable name} indicates a dynamic parameter.
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
   * The information about the API operation that is used to create the RAM role.
   */
  apiForCreation?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvisionRolesApiForCreation;
  /**
   * @remarks
   * Indicates whether the RAM role is created. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  created?: boolean;
  /**
   * @remarks
   * The purpose for which the RAM role is used. Default value: Default. A value of Default indicates that the RAM role is the default role of the service.
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
   * The authorization URL of the RAM role.
   * 
   * > This parameter is returned if Created is set to false.
   * 
   * @example
   * https://ram.console.aliyun.com/role/authorization?request={"Services":[{"Service":"CS","Roles":[{"RoleName":"AliyunCSManagedVKRole","TemplateId":"AliyunCSManagedVKRole"},{"RoleName":"AliyunCSDefaultRole","TemplateId":"Default"}]}],"ReturnUrl":"https://cs.console.aliyun.com/"}
   */
  authorizationURL?: string;
  /**
   * @remarks
   * The RAM roles.
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
   * Indicates whether automatic activation for the service is defined in the template. Valid values:
   * 
   * *   true: Automatic activation for the service is defined in the template.
   * *   false: Manual activation for the service is defined in the template.
   * 
   * @example
   * true
   */
  autoEnableService?: boolean;
  /**
   * @remarks
   * Product details. Some services (such as ACS) involve the activation of multiple products
   */
  commodityProvisions?: GetServiceProvisionsResponseBodyServiceProvisionsCommodityProvisions[];
  /**
   * @remarks
   * The URL that points to the activation page of the service.
   * 
   * > This parameter is returned if Status is set to Disabled.
   * 
   * @example
   * https://common-buy.aliyun.com/?commodityCode=sls
   */
  enableURL?: string;
  /**
   * @remarks
   * The information about the RAM roles of the cloud service. If this parameter is empty, no RAM roles is associated with the service.
   */
  roleProvision?: GetServiceProvisionsResponseBodyServiceProvisionsRoleProvision;
  /**
   * @remarks
   * The name of the cloud service.
   * 
   * @example
   * db
   */
  serviceName?: string;
  /**
   * @remarks
   * The activation status of the cloud service. Valid values:
   * 
   * - Enabled: The cloud service is activated.
   * - EnabledByDefault: The cloud service is activated by default.
   * - Disabled: The cloud service is not activated.
   * - Unknown: The activation status of the cloud service is unknown.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The reason why the service is in the Disabled or Unknown state.
   * 
   * > This parameter is returned if Status is set to Disabled or Unknown.
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
   * The information about the cloud services.
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


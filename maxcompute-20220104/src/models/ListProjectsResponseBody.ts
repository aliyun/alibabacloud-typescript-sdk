// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyDataProjectsIpWhiteList extends $dara.Model {
  ipList?: string;
  vpcIpList?: string;
  static names(): { [key: string]: string } {
    return {
      ipList: 'ipList',
      vpcIpList: 'vpcIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipList: 'string',
      vpcIpList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsPropertiesEncryption extends $dara.Model {
  algorithm?: string;
  enable?: boolean;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'algorithm',
      enable: 'enable',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      enable: 'boolean',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsPropertiesExternalProjectProperties extends $dara.Model {
  isExternalCatalogBound?: string;
  static names(): { [key: string]: string } {
    return {
      isExternalCatalogBound: 'isExternalCatalogBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isExternalCatalogBound: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle extends $dara.Model {
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsProperties extends $dara.Model {
  allowFullScan?: boolean;
  enableDecimal2?: boolean;
  enableTunnelQuotaRoute?: boolean;
  encryption?: ListProjectsResponseBodyDataProjectsPropertiesEncryption;
  externalProjectProperties?: ListProjectsResponseBodyDataProjectsPropertiesExternalProjectProperties;
  retentionDays?: number;
  sqlMeteringMax?: string;
  tableLifecycle?: ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle;
  timezone?: string;
  tunnelQuota?: string;
  typeSystem?: string;
  static names(): { [key: string]: string } {
    return {
      allowFullScan: 'allowFullScan',
      enableDecimal2: 'enableDecimal2',
      enableTunnelQuotaRoute: 'enableTunnelQuotaRoute',
      encryption: 'encryption',
      externalProjectProperties: 'externalProjectProperties',
      retentionDays: 'retentionDays',
      sqlMeteringMax: 'sqlMeteringMax',
      tableLifecycle: 'tableLifecycle',
      timezone: 'timezone',
      tunnelQuota: 'tunnelQuota',
      typeSystem: 'typeSystem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFullScan: 'boolean',
      enableDecimal2: 'boolean',
      enableTunnelQuotaRoute: 'boolean',
      encryption: ListProjectsResponseBodyDataProjectsPropertiesEncryption,
      externalProjectProperties: ListProjectsResponseBodyDataProjectsPropertiesExternalProjectProperties,
      retentionDays: 'number',
      sqlMeteringMax: 'string',
      tableLifecycle: ListProjectsResponseBodyDataProjectsPropertiesTableLifecycle,
      timezone: 'string',
      tunnelQuota: 'string',
      typeSystem: 'string',
    };
  }

  validate() {
    if(this.encryption && typeof (this.encryption as any).validate === 'function') {
      (this.encryption as any).validate();
    }
    if(this.externalProjectProperties && typeof (this.externalProjectProperties as any).validate === 'function') {
      (this.externalProjectProperties as any).validate();
    }
    if(this.tableLifecycle && typeof (this.tableLifecycle as any).validate === 'function') {
      (this.tableLifecycle as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsSaleTag extends $dara.Model {
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsSecurityPropertiesProjectProtection extends $dara.Model {
  exceptionPolicy?: string;
  protected?: boolean;
  static names(): { [key: string]: string } {
    return {
      exceptionPolicy: 'exceptionPolicy',
      protected: 'protected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionPolicy: 'string',
      protected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjectsSecurityProperties extends $dara.Model {
  enableDownloadPrivilege?: boolean;
  labelSecurity?: boolean;
  objectCreatorHasAccessPermission?: boolean;
  objectCreatorHasGrantPermission?: boolean;
  projectProtection?: ListProjectsResponseBodyDataProjectsSecurityPropertiesProjectProtection;
  usingAcl?: boolean;
  usingPolicy?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableDownloadPrivilege: 'enableDownloadPrivilege',
      labelSecurity: 'labelSecurity',
      objectCreatorHasAccessPermission: 'objectCreatorHasAccessPermission',
      objectCreatorHasGrantPermission: 'objectCreatorHasGrantPermission',
      projectProtection: 'projectProtection',
      usingAcl: 'usingAcl',
      usingPolicy: 'usingPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDownloadPrivilege: 'boolean',
      labelSecurity: 'boolean',
      objectCreatorHasAccessPermission: 'boolean',
      objectCreatorHasGrantPermission: 'boolean',
      projectProtection: ListProjectsResponseBodyDataProjectsSecurityPropertiesProjectProtection,
      usingAcl: 'boolean',
      usingPolicy: 'boolean',
    };
  }

  validate() {
    if(this.projectProtection && typeof (this.projectProtection as any).validate === 'function') {
      (this.projectProtection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyDataProjects extends $dara.Model {
  comment?: string;
  costStorage?: string;
  createdTime?: number;
  defaultQuota?: string;
  ipWhiteList?: ListProjectsResponseBodyDataProjectsIpWhiteList;
  name?: string;
  owner?: string;
  properties?: ListProjectsResponseBodyDataProjectsProperties;
  regionId?: string;
  saleTag?: ListProjectsResponseBodyDataProjectsSaleTag;
  securityProperties?: ListProjectsResponseBodyDataProjectsSecurityProperties;
  status?: string;
  threeTierModel?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      costStorage: 'costStorage',
      createdTime: 'createdTime',
      defaultQuota: 'defaultQuota',
      ipWhiteList: 'ipWhiteList',
      name: 'name',
      owner: 'owner',
      properties: 'properties',
      regionId: 'regionId',
      saleTag: 'saleTag',
      securityProperties: 'securityProperties',
      status: 'status',
      threeTierModel: 'threeTierModel',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      costStorage: 'string',
      createdTime: 'number',
      defaultQuota: 'string',
      ipWhiteList: ListProjectsResponseBodyDataProjectsIpWhiteList,
      name: 'string',
      owner: 'string',
      properties: ListProjectsResponseBodyDataProjectsProperties,
      regionId: 'string',
      saleTag: ListProjectsResponseBodyDataProjectsSaleTag,
      securityProperties: ListProjectsResponseBodyDataProjectsSecurityProperties,
      status: 'string',
      threeTierModel: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.ipWhiteList && typeof (this.ipWhiteList as any).validate === 'function') {
      (this.ipWhiteList as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    if(this.saleTag && typeof (this.saleTag as any).validate === 'function') {
      (this.saleTag as any).validate();
    }
    if(this.securityProperties && typeof (this.securityProperties as any).validate === 'function') {
      (this.securityProperties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyData extends $dara.Model {
  nextToken?: string;
  marker?: string;
  maxItem?: number;
  projects?: ListProjectsResponseBodyDataProjects[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      marker: 'marker',
      maxItem: 'maxItem',
      projects: 'projects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      marker: 'string',
      maxItem: 'number',
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyDataProjects },
    };
  }

  validate() {
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $dara.Model {
  data?: ListProjectsResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListProjectsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


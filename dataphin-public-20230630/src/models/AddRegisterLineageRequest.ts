// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRegisterLineageRequestAddRegisterLineageCommandDetailedLineagesSource extends $dara.Model {
  /**
   * @example
   * dataphin
   */
  catalog?: string;
  /**
   * @example
   * DEV, PROD
   */
  env?: string;
  extProperties?: { [key: string]: any };
  /**
   * @example
   * odps.300000001.project1.table1.column1
   */
  guid?: string;
  /**
   * @example
   * COLUMN
   */
  metadataType?: string;
  /**
   * @example
   * column1
   */
  name?: string;
  /**
   * @example
   * odps.300000001.project1.table1
   */
  parentGuid?: string;
  /**
   * @example
   * BY_GUID, BY_PROPERTY
   */
  referenceType?: string;
  /**
   * @example
   * project1, bizUnit1
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      env: 'Env',
      extProperties: 'ExtProperties',
      guid: 'Guid',
      metadataType: 'MetadataType',
      name: 'Name',
      parentGuid: 'ParentGuid',
      referenceType: 'ReferenceType',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      env: 'string',
      extProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      guid: 'string',
      metadataType: 'string',
      name: 'string',
      parentGuid: 'string',
      referenceType: 'string',
      schema: 'string',
    };
  }

  validate() {
    if(this.extProperties) {
      $dara.Model.validateMap(this.extProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRegisterLineageRequestAddRegisterLineageCommandDetailedLineagesTarget extends $dara.Model {
  /**
   * @example
   * dataphin
   */
  catalog?: string;
  /**
   * @example
   * DEV, PROD
   */
  env?: string;
  extProperties?: { [key: string]: any };
  /**
   * @example
   * odps.300000001.project1.table1.column1
   */
  guid?: string;
  /**
   * @example
   * COLUMN
   */
  metadataType?: string;
  /**
   * @example
   * column1
   */
  name?: string;
  /**
   * @example
   * odps.300000001.project1.table1
   */
  parentGuid?: string;
  /**
   * @example
   * BY_GUID, BY_PROPERTY
   */
  referenceType?: string;
  /**
   * @example
   * project1, bizUnit1
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      env: 'Env',
      extProperties: 'ExtProperties',
      guid: 'Guid',
      metadataType: 'MetadataType',
      name: 'Name',
      parentGuid: 'ParentGuid',
      referenceType: 'ReferenceType',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      env: 'string',
      extProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      guid: 'string',
      metadataType: 'string',
      name: 'string',
      parentGuid: 'string',
      referenceType: 'string',
      schema: 'string',
    };
  }

  validate() {
    if(this.extProperties) {
      $dara.Model.validateMap(this.extProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRegisterLineageRequestAddRegisterLineageCommandDetailedLineages extends $dara.Model {
  isDirect?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  source?: AddRegisterLineageRequestAddRegisterLineageCommandDetailedLineagesSource;
  /**
   * @remarks
   * This parameter is required.
   */
  target?: AddRegisterLineageRequestAddRegisterLineageCommandDetailedLineagesTarget;
  static names(): { [key: string]: string } {
    return {
      isDirect: 'IsDirect',
      source: 'Source',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDirect: 'boolean',
      source: AddRegisterLineageRequestAddRegisterLineageCommandDetailedLineagesSource,
      target: AddRegisterLineageRequestAddRegisterLineageCommandDetailedLineagesTarget,
    };
  }

  validate() {
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRegisterLineageRequestAddRegisterLineageCommandSource extends $dara.Model {
  /**
   * @example
   * dataphin
   */
  catalog?: string;
  /**
   * @example
   * DEV, PROD
   */
  env?: string;
  extProperties?: { [key: string]: any };
  /**
   * @example
   * odps.300000001.project1.table1
   */
  guid?: string;
  /**
   * @example
   * PHYSICAL_TABLE, PHYSICAL_VIEW, PHYSICAL_MATERIALIZED_VIEW, DATASOURCE_TABLE, DATASOURCE_VIEW, DATASOURCE_MATERIALIZED_VIEW, DIM_NORMAL, DIM_LEVEL, DIM_ENUM, DIM_VIRTUAL, FACT_EVENT, FACT_PROCESS, FACT_SNAPSHOT, SUM_BIZ_UNIT
   */
  metadataSubType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  metadataType?: string;
  /**
   * @example
   * table1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BY_GUID, BY_PROPERTY
   */
  referenceType?: string;
  /**
   * @example
   * project1, bizUnit1
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      env: 'Env',
      extProperties: 'ExtProperties',
      guid: 'Guid',
      metadataSubType: 'MetadataSubType',
      metadataType: 'MetadataType',
      name: 'Name',
      referenceType: 'ReferenceType',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      env: 'string',
      extProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      guid: 'string',
      metadataSubType: 'string',
      metadataType: 'string',
      name: 'string',
      referenceType: 'string',
      schema: 'string',
    };
  }

  validate() {
    if(this.extProperties) {
      $dara.Model.validateMap(this.extProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRegisterLineageRequestAddRegisterLineageCommandTarget extends $dara.Model {
  /**
   * @example
   * dataphin
   */
  catalog?: string;
  /**
   * @example
   * DEV, PROD
   */
  env?: string;
  extProperties?: { [key: string]: any };
  /**
   * @example
   * odps.300000001.project1.table1
   */
  guid?: string;
  /**
   * @example
   * PHYSICAL_TABLE, PHYSICAL_VIEW, PHYSICAL_MATERIALIZED_VIEW, DATASOURCE_TABLE, DATASOURCE_VIEW, DATASOURCE_MATERIALIZED_VIEW, DIM_NORMAL, DIM_LEVEL, DIM_ENUM, DIM_VIRTUAL, FACT_EVENT, FACT_PROCESS, FACT_SNAPSHOT, SUM_BIZ_UNIT
   */
  metadataSubType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  metadataType?: string;
  /**
   * @example
   * table1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * BY_GUID, BY_PROPERTY
   */
  referenceType?: string;
  /**
   * @example
   * project1, bizUnit1
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      env: 'Env',
      extProperties: 'ExtProperties',
      guid: 'Guid',
      metadataSubType: 'MetadataSubType',
      metadataType: 'MetadataType',
      name: 'Name',
      referenceType: 'ReferenceType',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      env: 'string',
      extProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      guid: 'string',
      metadataSubType: 'string',
      metadataType: 'string',
      name: 'string',
      referenceType: 'string',
      schema: 'string',
    };
  }

  validate() {
    if(this.extProperties) {
      $dara.Model.validateMap(this.extProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRegisterLineageRequestAddRegisterLineageCommand extends $dara.Model {
  checkAssetExist?: boolean;
  detailedLineages?: AddRegisterLineageRequestAddRegisterLineageCommandDetailedLineages[];
  relationProperties?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   */
  source?: AddRegisterLineageRequestAddRegisterLineageCommandSource;
  /**
   * @remarks
   * This parameter is required.
   */
  target?: AddRegisterLineageRequestAddRegisterLineageCommandTarget;
  /**
   * @example
   * 300001234
   */
  tenantId?: number;
  /**
   * @example
   * 300004567
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      checkAssetExist: 'CheckAssetExist',
      detailedLineages: 'DetailedLineages',
      relationProperties: 'RelationProperties',
      source: 'Source',
      target: 'Target',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkAssetExist: 'boolean',
      detailedLineages: { 'type': 'array', 'itemType': AddRegisterLineageRequestAddRegisterLineageCommandDetailedLineages },
      relationProperties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: AddRegisterLineageRequestAddRegisterLineageCommandSource,
      target: AddRegisterLineageRequestAddRegisterLineageCommandTarget,
      tenantId: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detailedLineages)) {
      $dara.Model.validateArray(this.detailedLineages);
    }
    if(this.relationProperties) {
      $dara.Model.validateMap(this.relationProperties);
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRegisterLineageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addRegisterLineageCommand?: AddRegisterLineageRequestAddRegisterLineageCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      addRegisterLineageCommand: 'AddRegisterLineageCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addRegisterLineageCommand: AddRegisterLineageRequestAddRegisterLineageCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.addRegisterLineageCommand && typeof (this.addRegisterLineageCommand as any).validate === 'function') {
      (this.addRegisterLineageCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRegisterLineageRequestAddRegisterLineageCommandDetailedLineagesSource extends $dara.Model {
  /**
   * @remarks
   * The catalog property of the asset. For tables, the catalog of both compute source tables and logical tables is uniformly set to dataphin. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
   * @example
   * dataphin
   */
  catalog?: string;
  /**
   * @remarks
   * The environment to which the asset belongs. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
   * @example
   * DEV, PROD
   */
  env?: string;
  /**
   * @remarks
   * The extended properties.
   */
  extProperties?: { [key: string]: any };
  /**
   * @remarks
   * The GUID of the asset. This parameter is required when referenceType is set to BY_GUID.
   * 
   * @example
   * odps.300000001.project1.table1.column1
   */
  guid?: string;
  /**
   * @remarks
   * The asset type. Set this parameter based on the actual scenario.
   * 
   * @example
   * COLUMN
   */
  metadataType?: string;
  /**
   * @remarks
   * The name of the asset. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
   * @example
   * column1
   */
  name?: string;
  /**
   * @remarks
   * The GUID of the parent asset. If the current object is a field, parentGuid is the GUID of the table to which the field belongs.
   * 
   * @example
   * odps.300000001.project1.table1
   */
  parentGuid?: string;
  /**
   * @remarks
   * The asset reference data type. Valid values: BY_GUID and BY_PROPERTY.
   * 
   * @example
   * BY_GUID, BY_PROPERTY
   */
  referenceType?: string;
  /**
   * @remarks
   * The schema property of the asset. For tables, this is typically the project or business unit. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
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
   * @remarks
   * The catalog property of the asset. For tables, the catalog of both compute source tables and logical tables is uniformly set to dataphin. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
   * @example
   * dataphin
   */
  catalog?: string;
  /**
   * @remarks
   * The environment to which the asset belongs. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
   * @example
   * DEV, PROD
   */
  env?: string;
  /**
   * @remarks
   * The extended properties.
   */
  extProperties?: { [key: string]: any };
  /**
   * @remarks
   * The GUID of the asset. This parameter is required when referenceType is set to BY_GUID.
   * 
   * @example
   * odps.300000001.project1.table1.column1
   */
  guid?: string;
  /**
   * @remarks
   * The asset type. Set this parameter based on the actual scenario.
   * 
   * @example
   * COLUMN
   */
  metadataType?: string;
  /**
   * @remarks
   * The name of the asset. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
   * @example
   * column1
   */
  name?: string;
  /**
   * @remarks
   * The GUID of the parent asset. If the current object is a field, parentGuid is the GUID of the table to which the field belongs.
   * 
   * @example
   * odps.300000001.project1.table1
   */
  parentGuid?: string;
  /**
   * @remarks
   * The asset reference data type. Valid values: BY_GUID and BY_PROPERTY.
   * 
   * @example
   * BY_GUID, BY_PROPERTY
   */
  referenceType?: string;
  /**
   * @remarks
   * The schema property of the asset. For tables, this is typically the project or business unit. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
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
  /**
   * @remarks
   * Specifies whether this is a direct lineage relationship. Default value: true.
   */
  isDirect?: boolean;
  /**
   * @remarks
   * The source asset reference.
   * 
   * This parameter is required.
   */
  source?: AddRegisterLineageRequestAddRegisterLineageCommandDetailedLineagesSource;
  /**
   * @remarks
   * The target asset reference.
   * 
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
   * @remarks
   * The catalog property of the asset. For tables, the catalog of both compute source tables and logical tables is uniformly set to dataphin. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
   * @example
   * dataphin
   */
  catalog?: string;
  /**
   * @remarks
   * The environment to which the asset belongs. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
   * @example
   * DEV, PROD
   */
  env?: string;
  /**
   * @remarks
   * The extended properties.
   */
  extProperties?: { [key: string]: any };
  /**
   * @remarks
   * The GUID of the asset. This parameter is required when referenceType is set to BY_GUID.
   * 
   * @example
   * odps.300000001.project1.table1
   */
  guid?: string;
  /**
   * @remarks
   * The asset subtype. Specify this parameter only when metadataType is set to TABLE and referenceType is not set to BY_GUID.
   * 
   * @example
   * PHYSICAL_TABLE, PHYSICAL_VIEW, PHYSICAL_MATERIALIZED_VIEW, DATASOURCE_TABLE, DATASOURCE_VIEW, DATASOURCE_MATERIALIZED_VIEW, DIM_NORMAL, DIM_LEVEL, DIM_ENUM, DIM_VIRTUAL, FACT_EVENT, FACT_PROCESS, FACT_SNAPSHOT, SUM_BIZ_UNIT
   */
  metadataSubType?: string;
  /**
   * @remarks
   * The asset type. Set this parameter based on the actual scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  metadataType?: string;
  /**
   * @remarks
   * The name of the asset. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
   * @example
   * table1
   */
  name?: string;
  /**
   * @remarks
   * The asset reference data type. Valid values: BY_GUID and BY_PROPERTY.
   * 
   * This parameter is required.
   * 
   * @example
   * BY_GUID, BY_PROPERTY
   */
  referenceType?: string;
  /**
   * @remarks
   * The schema property of the asset. For tables, this is typically the project or business unit. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
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
   * @remarks
   * The catalog property of the asset. For tables, the catalog of both compute source tables and logical tables is uniformly set to dataphin. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
   * @example
   * dataphin
   */
  catalog?: string;
  /**
   * @remarks
   * The environment to which the asset belongs. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
   * @example
   * DEV, PROD
   */
  env?: string;
  /**
   * @remarks
   * The extended properties.
   */
  extProperties?: { [key: string]: any };
  /**
   * @remarks
   * The GUID of the asset. This parameter is required when referenceType is set to BY_GUID.
   * 
   * @example
   * odps.300000001.project1.table1
   */
  guid?: string;
  /**
   * @remarks
   * The asset subtype. Specify this parameter only when metadataType is set to TABLE and referenceType is not set to BY_GUID.
   * 
   * @example
   * PHYSICAL_TABLE, PHYSICAL_VIEW, PHYSICAL_MATERIALIZED_VIEW, DATASOURCE_TABLE, DATASOURCE_VIEW, DATASOURCE_MATERIALIZED_VIEW, DIM_NORMAL, DIM_LEVEL, DIM_ENUM, DIM_VIRTUAL, FACT_EVENT, FACT_PROCESS, FACT_SNAPSHOT, SUM_BIZ_UNIT
   */
  metadataSubType?: string;
  /**
   * @remarks
   * The asset type. Set this parameter based on the actual scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  metadataType?: string;
  /**
   * @remarks
   * The name of the asset. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
   * @example
   * table1
   */
  name?: string;
  /**
   * @remarks
   * The asset reference data type. Valid values: BY_GUID and BY_PROPERTY.
   * 
   * This parameter is required.
   * 
   * @example
   * BY_GUID, BY_PROPERTY
   */
  referenceType?: string;
  /**
   * @remarks
   * The schema property of the asset. For tables, this is typically the project or business unit. This property is used to identify the corresponding asset by property when referenceType is set to BY_PROPERTY. If referenceType is set to BY_GUID, this property does not need to be specified.
   * 
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
  /**
   * @remarks
   * Specifies whether to check the existence of the asset. By default, the existence is not checked.
   */
  checkAssetExist?: boolean;
  /**
   * @remarks
   * The detailed lineage relationships. For tables, these are field-level lineage relationships. If you do not want to add field-level lineage, leave this parameter empty.
   */
  detailedLineages?: AddRegisterLineageRequestAddRegisterLineageCommandDetailedLineages[];
  /**
   * @remarks
   * The lineage relationship properties.
   */
  relationProperties?: { [key: string]: any };
  /**
   * @remarks
   * The source asset.
   * 
   * This parameter is required.
   */
  source?: AddRegisterLineageRequestAddRegisterLineageCommandSource;
  /**
   * @remarks
   * The target asset.
   * 
   * This parameter is required.
   */
  target?: AddRegisterLineageRequestAddRegisterLineageCommandTarget;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 300001234
   */
  tenantId?: number;
  /**
   * @remarks
   * The ID of the current user.
   * 
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
   * The command for registering and adding data lineage.
   * 
   * This parameter is required.
   */
  addRegisterLineageCommand?: AddRegisterLineageRequestAddRegisterLineageCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
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


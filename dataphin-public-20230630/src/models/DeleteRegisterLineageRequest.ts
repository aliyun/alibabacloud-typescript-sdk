// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineagesSource extends $dara.Model {
  /**
   * @remarks
   * The catalog of the asset. For tables, the catalog of compute source tables or logical tables is uniformly set to dataphin. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
   * 
   * @example
   * dataphin
   */
  catalog?: string;
  /**
   * @remarks
   * The environment to which the asset belongs. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
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
   * The GUID of the asset. This parameter is required when ReferenceType is set to BY_GUID.
   * 
   * @example
   * odps.300000001.project1.table1
   */
  guid?: string;
  /**
   * @remarks
   * The asset type. Specify this parameter as needed.
   * 
   * @example
   * COLUMN
   */
  metadataType?: string;
  /**
   * @remarks
   * The name of the asset. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
   * 
   * @example
   * column1
   */
  name?: string;
  /**
   * @remarks
   * The GUID of the parent asset. If the current object is a field, the parent GUID is the GUID of the table to which the field belongs.
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
   * The schema of the asset. For tables, this is generally a project or a business unit. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
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

export class DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineagesTarget extends $dara.Model {
  /**
   * @remarks
   * The catalog of the asset. For tables, the catalog of compute source tables or logical tables is uniformly set to dataphin. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
   * 
   * @example
   * dataphin
   */
  catalog?: string;
  /**
   * @remarks
   * The environment to which the asset belongs. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
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
   * The GUID of the asset. This parameter is required when ReferenceType is set to BY_GUID.
   * 
   * @example
   * odps.300000001.project1.table1
   */
  guid?: string;
  /**
   * @remarks
   * The asset type. Specify this parameter as needed.
   * 
   * @example
   * COLUMN
   */
  metadataType?: string;
  /**
   * @remarks
   * The name of the asset. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
   * 
   * @example
   * column1
   */
  name?: string;
  /**
   * @remarks
   * The GUID of the parent asset. If the current object is a field, the parent GUID is the GUID of the table to which the field belongs.
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
   * The schema of the asset. For tables, this is generally a project or a business unit. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
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

export class DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineages extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the lineage is direct. Default value: true.
   */
  isDirect?: boolean;
  /**
   * @remarks
   * The source asset reference.
   * 
   * This parameter is required.
   */
  source?: DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineagesSource;
  /**
   * @remarks
   * The target asset reference.
   * 
   * This parameter is required.
   */
  target?: DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineagesTarget;
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
      source: DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineagesSource,
      target: DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineagesTarget,
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

export class DeleteRegisterLineageRequestDeleteRegisterLineageCommandSource extends $dara.Model {
  /**
   * @remarks
   * The catalog of the asset. For tables, the catalog of compute source tables or logical tables is uniformly set to dataphin. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
   * 
   * @example
   * dataphin
   */
  catalog?: string;
  /**
   * @remarks
   * The environment to which the asset belongs. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
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
   * The GUID of the asset. This parameter is required when ReferenceType is set to BY_GUID.
   * 
   * @example
   * odps.300000001.project1.table1
   */
  guid?: string;
  /**
   * @remarks
   * The subtype of the asset. Specify this parameter only when MetadataType is set to TABLE and ReferenceType is not set to BY_GUID.
   * 
   * @example
   * PHYSICAL_TABLE, PHYSICAL_VIEW, PHYSICAL_MATERIALIZED_VIEW, DATASOURCE_TABLE, DATASOURCE_VIEW, DATASOURCE_MATERIALIZED_VIEW, DIM_NORMAL, DIM_LEVEL, DIM_ENUM, DIM_VIRTUAL, FACT_EVENT, FACT_PROCESS, FACT_SNAPSHOT, SUM_BIZ_UNIT
   */
  metadataSubType?: string;
  /**
   * @remarks
   * The Asset Type. Specify this parameter based on actual conditions.
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  metadataType?: string;
  /**
   * @remarks
   * The name of the asset. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
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
   * The schema of the asset. For tables, this is generally a project or a business unit. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
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

export class DeleteRegisterLineageRequestDeleteRegisterLineageCommandTarget extends $dara.Model {
  /**
   * @remarks
   * The catalog of the asset. For tables, the catalog of compute source tables or logical tables is uniformly set to dataphin. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
   * 
   * @example
   * dataphin
   */
  catalog?: string;
  /**
   * @remarks
   * The environment to which the asset belongs. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
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
   * The GUID of the asset. This parameter is required when ReferenceType is set to BY_GUID.
   * 
   * @example
   * odps.300000001.project1.table1
   */
  guid?: string;
  /**
   * @remarks
   * The subtype of the asset. Specify this parameter only when MetadataType is set to TABLE and ReferenceType is not set to BY_GUID.
   * 
   * @example
   * PHYSICAL_TABLE, PHYSICAL_VIEW, PHYSICAL_MATERIALIZED_VIEW, DATASOURCE_TABLE, DATASOURCE_VIEW, DATASOURCE_MATERIALIZED_VIEW, DIM_NORMAL, DIM_LEVEL, DIM_ENUM, DIM_VIRTUAL, FACT_EVENT, FACT_PROCESS, FACT_SNAPSHOT,SUM_BIZ_UNIT
   */
  metadataSubType?: string;
  /**
   * @remarks
   * The Asset Type. Specify this parameter based on actual conditions.
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  metadataType?: string;
  /**
   * @remarks
   * The name of the asset. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
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
   * The schema of the asset. For tables, this is generally a project or a business unit. This property is used to identify the corresponding asset based on properties when ReferenceType is set to BY_PROPERTY. If ReferenceType is set to BY_GUID, this property is not required.
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

export class DeleteRegisterLineageRequestDeleteRegisterLineageCommand extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically delete the object lineage after all detailed lineages are deleted. Default value: true.
   */
  cascadeDeleteLineage?: boolean;
  /**
   * @remarks
   * The detailed lineage. For tables, the detailed lineage refers to field lineage.
   */
  detailedLineages?: DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineages[];
  /**
   * @remarks
   * The source of the lineage.
   * 
   * This parameter is required.
   */
  source?: DeleteRegisterLineageRequestDeleteRegisterLineageCommandSource;
  /**
   * @remarks
   * The target of the lineage.
   * 
   * This parameter is required.
   */
  target?: DeleteRegisterLineageRequestDeleteRegisterLineageCommandTarget;
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
      cascadeDeleteLineage: 'CascadeDeleteLineage',
      detailedLineages: 'DetailedLineages',
      source: 'Source',
      target: 'Target',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadeDeleteLineage: 'boolean',
      detailedLineages: { 'type': 'array', 'itemType': DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineages },
      source: DeleteRegisterLineageRequestDeleteRegisterLineageCommandSource,
      target: DeleteRegisterLineageRequestDeleteRegisterLineageCommandTarget,
      tenantId: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detailedLineages)) {
      $dara.Model.validateArray(this.detailedLineages);
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

export class DeleteRegisterLineageRequest extends $dara.Model {
  /**
   * @remarks
   * The command to delete registered lineage.
   * 
   * This parameter is required.
   */
  deleteRegisterLineageCommand?: DeleteRegisterLineageRequestDeleteRegisterLineageCommand;
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
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteRegisterLineageCommand: 'DeleteRegisterLineageCommand',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteRegisterLineageCommand: DeleteRegisterLineageRequestDeleteRegisterLineageCommand,
      opTenantId: 'number',
      opUserId: 'string',
    };
  }

  validate() {
    if(this.deleteRegisterLineageCommand && typeof (this.deleteRegisterLineageCommand as any).validate === 'function') {
      (this.deleteRegisterLineageCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


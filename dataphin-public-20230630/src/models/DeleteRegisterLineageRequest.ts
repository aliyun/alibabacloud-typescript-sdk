// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineagesSource extends $dara.Model {
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

export class DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineagesTarget extends $dara.Model {
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

export class DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineages extends $dara.Model {
  isDirect?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  source?: DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineagesSource;
  /**
   * @remarks
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

export class DeleteRegisterLineageRequestDeleteRegisterLineageCommandTarget extends $dara.Model {
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
   * PHYSICAL_TABLE, PHYSICAL_VIEW, PHYSICAL_MATERIALIZED_VIEW, DATASOURCE_TABLE, DATASOURCE_VIEW, DATASOURCE_MATERIALIZED_VIEW, DIM_NORMAL, DIM_LEVEL, DIM_ENUM, DIM_VIRTUAL, FACT_EVENT, FACT_PROCESS, FACT_SNAPSHOT,SUM_BIZ_UNIT
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

export class DeleteRegisterLineageRequestDeleteRegisterLineageCommand extends $dara.Model {
  cascadeDeleteLineage?: boolean;
  detailedLineages?: DeleteRegisterLineageRequestDeleteRegisterLineageCommandDetailedLineages[];
  /**
   * @remarks
   * This parameter is required.
   */
  source?: DeleteRegisterLineageRequestDeleteRegisterLineageCommandSource;
  /**
   * @remarks
   * This parameter is required.
   */
  target?: DeleteRegisterLineageRequestDeleteRegisterLineageCommandTarget;
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
   * This parameter is required.
   */
  deleteRegisterLineageCommand?: DeleteRegisterLineageRequestDeleteRegisterLineageCommand;
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
      deleteRegisterLineageCommand: 'DeleteRegisterLineageCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteRegisterLineageCommand: DeleteRegisterLineageRequestDeleteRegisterLineageCommand,
      opTenantId: 'number',
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


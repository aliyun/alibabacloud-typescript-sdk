// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticKnowledgeView extends $dara.Model {
  catalogUuid?: string;
  columnName?: string;
  createTime?: number;
  databaseUuid?: string;
  description?: string;
  entityType?: string;
  extra?: { [key: string]: any };
  knowledgeUuid?: string;
  level?: string;
  locked?: boolean;
  lockedBy?: string;
  lockedTime?: number;
  modifyTime?: number;
  qualifiedName?: string;
  source?: string;
  summary?: string;
  title?: string;
  unitCatalogUuid?: string;
  unitDatabaseUuid?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      catalogUuid: 'CatalogUuid',
      columnName: 'ColumnName',
      createTime: 'CreateTime',
      databaseUuid: 'DatabaseUuid',
      description: 'Description',
      entityType: 'EntityType',
      extra: 'Extra',
      knowledgeUuid: 'KnowledgeUuid',
      level: 'Level',
      locked: 'Locked',
      lockedBy: 'LockedBy',
      lockedTime: 'LockedTime',
      modifyTime: 'ModifyTime',
      qualifiedName: 'QualifiedName',
      source: 'Source',
      summary: 'Summary',
      title: 'Title',
      unitCatalogUuid: 'UnitCatalogUuid',
      unitDatabaseUuid: 'UnitDatabaseUuid',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogUuid: 'string',
      columnName: 'string',
      createTime: 'number',
      databaseUuid: 'string',
      description: 'string',
      entityType: 'string',
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      knowledgeUuid: 'string',
      level: 'string',
      locked: 'boolean',
      lockedBy: 'string',
      lockedTime: 'number',
      modifyTime: 'number',
      qualifiedName: 'string',
      source: 'string',
      summary: 'string',
      title: 'string',
      unitCatalogUuid: 'string',
      unitDatabaseUuid: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


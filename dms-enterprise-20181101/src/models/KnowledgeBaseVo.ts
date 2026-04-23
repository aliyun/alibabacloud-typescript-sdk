// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeBaseVO extends $dara.Model {
  category?: string;
  confidence?: number;
  dbId?: number;
  dbName?: string;
  description?: string;
  entityId?: number;
  env?: string;
  expr?: string;
  gmtCreate?: string;
  instanceName?: string;
  isDelete?: boolean;
  knowledgeId?: string;
  knowledgeType?: string;
  levelType?: string;
  name?: string;
  oldDescription?: string;
  oldSummary?: string;
  parseDesc?: string;
  reasoningLogic?: string;
  relationType?: string;
  showType?: string;
  summary?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      confidence: 'Confidence',
      dbId: 'DbId',
      dbName: 'DbName',
      description: 'Description',
      entityId: 'EntityId',
      env: 'Env',
      expr: 'Expr',
      gmtCreate: 'GmtCreate',
      instanceName: 'InstanceName',
      isDelete: 'IsDelete',
      knowledgeId: 'KnowledgeId',
      knowledgeType: 'KnowledgeType',
      levelType: 'LevelType',
      name: 'Name',
      oldDescription: 'OldDescription',
      oldSummary: 'OldSummary',
      parseDesc: 'ParseDesc',
      reasoningLogic: 'ReasoningLogic',
      relationType: 'RelationType',
      showType: 'ShowType',
      summary: 'Summary',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      confidence: 'number',
      dbId: 'number',
      dbName: 'string',
      description: 'string',
      entityId: 'number',
      env: 'string',
      expr: 'string',
      gmtCreate: 'string',
      instanceName: 'string',
      isDelete: 'boolean',
      knowledgeId: 'string',
      knowledgeType: 'string',
      levelType: 'string',
      name: 'string',
      oldDescription: 'string',
      oldSummary: 'string',
      parseDesc: 'string',
      reasoningLogic: 'string',
      relationType: 'string',
      showType: 'string',
      summary: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeCategory extends $dara.Model {
  createdAt?: number;
  description?: string;
  keywords?: string[];
  knowledgeBaseId?: string;
  knowledgeBaseName?: string;
  knowledgeCategoryId?: string;
  name?: string;
  owner?: string;
  ownerType?: string;
  parentKnowledgeCategoryId?: string;
  status?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      description: 'description',
      keywords: 'keywords',
      knowledgeBaseId: 'knowledge_base_id',
      knowledgeBaseName: 'knowledge_base_name',
      knowledgeCategoryId: 'knowledge_category_id',
      name: 'name',
      owner: 'owner',
      ownerType: 'owner_type',
      parentKnowledgeCategoryId: 'parent_knowledge_category_id',
      status: 'status',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      description: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      knowledgeBaseId: 'string',
      knowledgeBaseName: 'string',
      knowledgeCategoryId: 'string',
      name: 'string',
      owner: 'string',
      ownerType: 'string',
      parentKnowledgeCategoryId: 'string',
      status: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


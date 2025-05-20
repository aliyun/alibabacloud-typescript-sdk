// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LinkRule } from "./LinkRule";


export class KnowledgeBase extends $dara.Model {
  coverUri?: string;
  createdAt?: number;
  description?: string;
  fileFilter?: string;
  knowledgeBaseId?: string;
  linkRuleList?: LinkRule[];
  name?: string;
  ownerId?: string;
  ownerName?: string;
  ownerType?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      coverUri: 'cover_uri',
      createdAt: 'created_at',
      description: 'description',
      fileFilter: 'file_filter',
      knowledgeBaseId: 'knowledge_base_id',
      linkRuleList: 'link_rule_list',
      name: 'name',
      ownerId: 'owner_id',
      ownerName: 'owner_name',
      ownerType: 'owner_type',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUri: 'string',
      createdAt: 'number',
      description: 'string',
      fileFilter: 'string',
      knowledgeBaseId: 'string',
      linkRuleList: { 'type': 'array', 'itemType': LinkRule },
      name: 'string',
      ownerId: 'string',
      ownerName: 'string',
      ownerType: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.linkRuleList)) {
      $dara.Model.validateArray(this.linkRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


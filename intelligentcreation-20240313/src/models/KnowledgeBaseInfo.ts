// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeBaseInfo extends $dara.Model {
  description?: string;
  id?: string;
  industry?: string;
  knowledgeBaseType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      id: 'id',
      industry: 'industry',
      knowledgeBaseType: 'knowledgeBaseType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      industry: 'string',
      knowledgeBaseType: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


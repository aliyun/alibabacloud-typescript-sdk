// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OssieModelView extends $dara.Model {
  catalogUuid?: string;
  databaseUuid?: string;
  description?: string;
  docFormat?: string;
  domainTopic?: string;
  expr?: string;
  gmtCreated?: number;
  gmtModified?: number;
  knowledgeUuid?: string;
  rawDoc?: string;
  semanticType?: string;
  source?: string;
  summary?: string;
  tag?: string;
  title?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      catalogUuid: 'CatalogUuid',
      databaseUuid: 'DatabaseUuid',
      description: 'Description',
      docFormat: 'DocFormat',
      domainTopic: 'DomainTopic',
      expr: 'Expr',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      knowledgeUuid: 'KnowledgeUuid',
      rawDoc: 'RawDoc',
      semanticType: 'SemanticType',
      source: 'Source',
      summary: 'Summary',
      tag: 'Tag',
      title: 'Title',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogUuid: 'string',
      databaseUuid: 'string',
      description: 'string',
      docFormat: 'string',
      domainTopic: 'string',
      expr: 'string',
      gmtCreated: 'number',
      gmtModified: 'number',
      knowledgeUuid: 'string',
      rawDoc: 'string',
      semanticType: 'string',
      source: 'string',
      summary: 'string',
      tag: 'string',
      title: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


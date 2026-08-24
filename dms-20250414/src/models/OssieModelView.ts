// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OssieModelView extends $dara.Model {
  /**
   * @remarks
   * The UUID of the associated instance.
   * 
   * @example
   * mc-SH-cd3ns***
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The UUID of the associated database.
   * 
   * @example
   * md-SH-q8XzcK***
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The semantic description.
   * 
   * @example
   * Order summary
   */
  description?: string;
  /**
   * @remarks
   * The semantic document format type.
   * 
   * @example
   * JSON
   */
  docFormat?: string;
  /**
   * @remarks
   * The domain topic.
   * 
   * @example
   * Order
   */
  domainTopic?: string;
  /**
   * @remarks
   * The expression content.
   * 
   * @example
   * select 1
   */
  expr?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1663809374000
   */
  gmtCreated?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1780539699000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The UUID of the semantic knowledge.
   * 
   * @example
   * dfb58bd***
   */
  knowledgeUuid?: string;
  /**
   * @remarks
   * The semantic document content.
   * 
   * @example
   * {
   *   "version": "0.2.0.dev0",
   *   "semantic_model": [
   *     {
   *       "name": "sales",
   *       "datasets": [
   *         {
   *           "name": "orders",
   *           "source": "analytics.public.orders"
   *         }
   *       ]
   *     }
   *   ]
   * }
   */
  rawDoc?: string;
  /**
   * @remarks
   * The semantic type.
   * 
   * @example
   * Ossie
   */
  semanticType?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * USER_EDIT
   */
  source?: string;
  /**
   * @remarks
   * The document summary.
   * 
   * @example
   * knowledge summary
   */
  summary?: string;
  /**
   * @remarks
   * The knowledge base tag.
   * 
   * @example
   * 1dq7qod8hxtt1***
   */
  tag?: string;
  /**
   * @remarks
   * The semantic title.
   * 
   * @example
   * Order total
   */
  title?: string;
  /**
   * @remarks
   * The version information.
   * 
   * @example
   * 0.1
   */
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


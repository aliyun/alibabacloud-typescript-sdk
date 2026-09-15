// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLumaDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my_agent
   */
  agentName?: string;
  /**
   * @remarks
   * The name of the data catalog bound to the Agent. You can call ListLumaCatalogs to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The unique identifier of the document. You can call ListLumaDocuments to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * doc-a1b2c3d4
   */
  documentId?: string;
  /**
   * @remarks
   * The name of the knowledge base bound to the Agent. You can call ListLumaKnowledgeBases to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * my-knowledge-base
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * The name of the namespace bound to the Agent. You can call ListLumaNamespaces to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      catalog: 'Catalog',
      documentId: 'DocumentId',
      knowledgeBaseName: 'KnowledgeBaseName',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      catalog: 'string',
      documentId: 'string',
      knowledgeBaseName: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


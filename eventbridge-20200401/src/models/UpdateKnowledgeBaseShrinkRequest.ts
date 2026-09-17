// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The data catalog to which the knowledge base belongs. This parameter, together with Namespace and KnowledgeBaseName, uniquely identifies a knowledge base. You can call ListCatalogs to obtain the value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * Optional. Updates the default chunking strategy of the knowledge base. The update takes effect only for documents uploaded after the update. Existing documents are not re-chunked. If this parameter is not specified, the configuration remains unchanged.
   */
  chunkConfigurationShrink?: string;
  /**
   * @remarks
   * The description of the knowledge base to update. If this parameter is not specified, the description remains unchanged.
   * 
   * @example
   * Product documentation knowledge base
   */
  description?: string;
  /**
   * @remarks
   * The name of the knowledge base. The name must be unique within the namespace. The name is specified during creation and cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * my-knowledge-base
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * The namespace to which the knowledge base belongs. The namespace must belong to the specified data catalog. This parameter, together with Catalog and KnowledgeBaseName, uniquely identifies a knowledge base. You can call ListNamespaces to obtain the value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * Optional. Updates the default search configuration at the knowledge base level. The update takes effect immediately for subsequent search requests. If this parameter is not specified, the configuration remains unchanged.
   */
  searchConfigurationShrink?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      chunkConfigurationShrink: 'ChunkConfiguration',
      description: 'Description',
      knowledgeBaseName: 'KnowledgeBaseName',
      namespace: 'Namespace',
      searchConfigurationShrink: 'SearchConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      chunkConfigurationShrink: 'string',
      description: 'string',
      knowledgeBaseName: 'string',
      namespace: 'string',
      searchConfigurationShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


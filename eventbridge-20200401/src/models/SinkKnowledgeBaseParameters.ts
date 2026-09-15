// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SinkKnowledgeBaseParameters extends $dara.Model {
  /**
   * @remarks
   * The data catalog to which the target knowledge base belongs. This parameter, together with Namespace and KnowledgeBaseName, uniquely identifies the knowledge base. You can call ListCatalogs to obtain this value.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The name of the target knowledge base, which is unique within the namespace. You can call ListKnowledgeBases to obtain this value.
   * 
   * @example
   * my-knowledge-base
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * The namespace to which the target knowledge base belongs. The namespace must belong to the specified data catalog. You can call ListNamespaces to obtain this value.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      knowledgeBaseName: 'KnowledgeBaseName',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
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


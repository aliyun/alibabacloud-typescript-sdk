// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocumentDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The data catalog to which the knowledge base belongs. This parameter, together with Namespace and KnowledgeBaseName, uniquely identifies the knowledge base. You can call ListCatalogs to obtain the value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The ID of the document.
   * 
   * This parameter is required.
   * 
   * @example
   * doc-bp1xxxxxxxxxxxx
   */
  documentId?: string;
  /**
   * @remarks
   * The name of the knowledge base. The name must be unique within the namespace. It is specified upon creation and cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * my-knowledge-base
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * The namespace to which the knowledge base belongs. The namespace must belong to the specified data catalog. This parameter, together with Catalog and KnowledgeBaseName, uniquely identifies the knowledge base. You can call ListNamespaces to obtain the value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The network type of the presigned URL. Valid values:
   * - PUBLIC: Accessible over the Internet. This is the default value.
   * - INTERNAL: Accessible only over the internal network within the same Alibaba Cloud region. No Internet traffic fees are incurred.
   * 
   * @example
   * PUBLIC
   */
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      catalog: 'Catalog',
      documentId: 'DocumentId',
      knowledgeBaseName: 'KnowledgeBaseName',
      namespace: 'Namespace',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalog: 'string',
      documentId: 'string',
      knowledgeBaseName: 'string',
      namespace: 'string',
      networkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


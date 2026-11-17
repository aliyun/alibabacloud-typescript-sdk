// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeSourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token used to ensure idempotence.
   * 
   * @example
   * source-create-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The data source configuration. This parameter is required when Type is set to DATA_SOURCE.
   */
  dataSourceShrink?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * The document configuration. This parameter is required when Type is set to DOCUMENT.
   */
  documentShrink?: string;
  /**
   * @remarks
   * The ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The name of the source.
   * 
   * This parameter is required.
   * 
   * @example
   * Sales topic project
   */
  name?: string;
  /**
   * @remarks
   * The project configuration. This parameter is required when Type is set to PROJECT.
   */
  projectShrink?: string;
  /**
   * @remarks
   * The type of the knowledge source. Valid values: PROJECT, DATA_SOURCE, and DOCUMENT.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataSourceShrink: 'DataSource',
      description: 'Description',
      documentShrink: 'Document',
      knowledgeBaseId: 'KnowledgeBaseId',
      name: 'Name',
      projectShrink: 'Project',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataSourceShrink: 'string',
      description: 'string',
      documentShrink: 'string',
      knowledgeBaseId: 'string',
      name: 'string',
      projectShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


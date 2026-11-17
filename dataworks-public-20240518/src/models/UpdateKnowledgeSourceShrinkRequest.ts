// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeSourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The complete configuration for Type=DATA_SOURCE.
   */
  dataSourceShrink?: string;
  /**
   * @remarks
   * The new description.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * The complete configuration for Type=DOCUMENT. Credentials are not returned after they are written.
   */
  documentShrink?: string;
  /**
   * @remarks
   * The ID of the knowledge base to which the source belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The new name.
   * 
   * @example
   * Sales Project
   */
  name?: string;
  /**
   * @remarks
   * The complete configuration for Type=PROJECT.
   */
  projectShrink?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * src-001
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceShrink: 'DataSource',
      description: 'Description',
      documentShrink: 'Document',
      knowledgeBaseId: 'KnowledgeBaseId',
      name: 'Name',
      projectShrink: 'Project',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceShrink: 'string',
      description: 'string',
      documentShrink: 'string',
      knowledgeBaseId: 'string',
      name: 'string',
      projectShrink: 'string',
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveKnowledgeBaseResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Not supported. This parameter is ignored.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleKnowledgeId
   */
  knowledgeId?: string;
  /**
   * @remarks
   * The source directory ID. This is the enterprise knowledge base directory where the resource currently resides.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceDirectoryId
   */
  sourceDirectoryId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2000627
   */
  sourceId?: string;
  /**
   * @remarks
   * The target directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleTargetDirectoryId
   */
  targetDirectoryId?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1729094555111072
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'knowledgeId',
      sourceDirectoryId: 'sourceDirectoryId',
      sourceId: 'sourceId',
      targetDirectoryId: 'targetDirectoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'string',
      sourceDirectoryId: 'string',
      sourceId: 'string',
      targetDirectoryId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeObjectRequest extends $dara.Model {
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
   * The ID of the long-term business object.
   * 
   * This parameter is required.
   * 
   * @example
   * obj-001
   */
  knowledgeObjectId?: string;
  /**
   * @remarks
   * Applies only to semantic models. Specifies the version to read. If omitted, the operation returns the published version if available, or the latest version otherwise.
   * 
   * @example
   * 1
   */
  versionNo?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      knowledgeObjectId: 'KnowledgeObjectId',
      versionNo: 'VersionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
      knowledgeObjectId: 'string',
      versionNo: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


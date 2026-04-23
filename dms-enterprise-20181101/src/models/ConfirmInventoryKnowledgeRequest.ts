// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmInventoryKnowledgeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2001
   */
  entityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1001
   */
  jobId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  knowledgeType?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      jobId: 'JobId',
      knowledgeType: 'KnowledgeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      jobId: 'number',
      knowledgeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


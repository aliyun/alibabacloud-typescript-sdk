// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitiatePptCreationV2Request extends $dara.Model {
  /**
   * @example
   * abc
   */
  externalUserId?: string;
  /**
   * @example
   * true
   */
  isMobile?: boolean;
  outline?: string;
  /**
   * @example
   * 500
   */
  pptTemplateId?: number;
  /**
   * @example
   * 1
   */
  pptTemplateType?: number;
  /**
   * @example
   * 1
   */
  processType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8a7dfece-f204-4380-a7d0-a13d37de3924
   */
  taskId?: string;
  /**
   * @example
   * llm-2setzb9x4ewsd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      externalUserId: 'ExternalUserId',
      isMobile: 'IsMobile',
      outline: 'Outline',
      pptTemplateId: 'PptTemplateId',
      pptTemplateType: 'PptTemplateType',
      processType: 'ProcessType',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalUserId: 'string',
      isMobile: 'boolean',
      outline: 'string',
      pptTemplateId: 'number',
      pptTemplateType: 'number',
      processType: 'number',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


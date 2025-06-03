// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveRunRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * assistantId1
   */
  assistantId?: string;
  /**
   * @example
   * assistantId
   */
  originalAssistantId?: string;
  /**
   * @example
   * runId123
   */
  runId?: string;
  /**
   * @example
   * agentKey1
   */
  sourceIdOfOriginalAssistantId?: string;
  /**
   * @example
   * 1
   */
  sourceTypeOfOriginalAssistantId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      originalAssistantId: 'originalAssistantId',
      runId: 'runId',
      sourceIdOfOriginalAssistantId: 'sourceIdOfOriginalAssistantId',
      sourceTypeOfOriginalAssistantId: 'sourceTypeOfOriginalAssistantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      originalAssistantId: 'string',
      runId: 'string',
      sourceIdOfOriginalAssistantId: 'string',
      sourceTypeOfOriginalAssistantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


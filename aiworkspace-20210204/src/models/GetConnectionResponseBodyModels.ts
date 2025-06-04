// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionResponseBodyModels extends $dara.Model {
  /**
   * @remarks
   * The display name of the model.
   */
  displayName?: string;
  /**
   * @remarks
   * The model identifier.
   * 
   * @example
   * model_001
   */
  model?: string;
  /**
   * @remarks
   * The model type. Valid values:
   * 
   * *   LLM
   * *   Embedding
   * *   ReRank
   * 
   * @example
   * LLM
   */
  modelType?: string;
  /**
   * @remarks
   * Indicates whether a tool can be called by using ToolCall. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  toolCall?: boolean;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      model: 'Model',
      modelType: 'ModelType',
      toolCall: 'ToolCall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      model: 'string',
      modelType: 'string',
      toolCall: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


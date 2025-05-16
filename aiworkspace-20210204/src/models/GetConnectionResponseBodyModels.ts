// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionResponseBodyModels extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * model_001
   */
  model?: string;
  /**
   * @example
   * LLM
   */
  modelType?: string;
  /**
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


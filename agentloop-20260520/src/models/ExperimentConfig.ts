// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelParameters } from "./ModelParameters";
import { PromptTemplateItem } from "./PromptTemplateItem";


export class ExperimentConfig extends $dara.Model {
  /**
   * @remarks
   * The endpoint connector ID. This parameter is required in user/agent mode.
   */
  endpointConnectorId?: string;
  /**
   * @remarks
   * The experiment label (A/B/C/D/E).
   */
  label?: string;
  /**
   * @remarks
   * The model name. You can set this parameter to agent in agent scenarios.
   */
  modelName?: string;
  /**
   * @remarks
   * The model parameters.
   */
  modelParameters?: ModelParameters;
  /**
   * @remarks
   * The model provider. Valid values: dashscope (default), user, and agent.
   */
  modelProvider?: string;
  /**
   * @remarks
   * The experiment name.
   */
  name?: string;
  /**
   * @remarks
   * The prompt message template. Supports {{variable name}} placeholders.
   */
  promptTemplate?: PromptTemplateItem[];
  /**
   * @remarks
   * The agent request body template. This parameter is required in agent mode. Supports {{variable name}} placeholders.
   */
  requestBodyTemplate?: string;
  /**
   * @remarks
   * The agent request header template. This parameter is optional in agent mode. Supports {{variable name}} placeholders.
   * 
   * @example
   * {"Content-Type: application/json" }
   */
  requestHeaderTemplate?: string;
  /**
   * @remarks
   * The agent request method. Valid values: POST (default) and GET.
   */
  requestMethod?: string;
  static names(): { [key: string]: string } {
    return {
      endpointConnectorId: 'endpointConnectorId',
      label: 'label',
      modelName: 'modelName',
      modelParameters: 'modelParameters',
      modelProvider: 'modelProvider',
      name: 'name',
      promptTemplate: 'promptTemplate',
      requestBodyTemplate: 'requestBodyTemplate',
      requestHeaderTemplate: 'requestHeaderTemplate',
      requestMethod: 'requestMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointConnectorId: 'string',
      label: 'string',
      modelName: 'string',
      modelParameters: ModelParameters,
      modelProvider: 'string',
      name: 'string',
      promptTemplate: { 'type': 'array', 'itemType': PromptTemplateItem },
      requestBodyTemplate: 'string',
      requestHeaderTemplate: 'string',
      requestMethod: 'string',
    };
  }

  validate() {
    if(this.modelParameters && typeof (this.modelParameters as any).validate === 'function') {
      (this.modelParameters as any).validate();
    }
    if(Array.isArray(this.promptTemplate)) {
      $dara.Model.validateArray(this.promptTemplate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


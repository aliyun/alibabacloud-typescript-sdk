// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunAgentResponseBodyDataResponseChoices } from "./RunAgentResponseBodyDataResponseChoices";


export class RunAgentResponseBodyDataResponse extends $dara.Model {
  choices?: RunAgentResponseBodyDataResponseChoices[];
  /**
   * @example
   * 1737448637
   */
  created?: number;
  /**
   * @example
   * d91d9afa-7cfc-4235-b012-a6f8e6ffa443
   */
  id?: string;
  /**
   * @example
   * qwen-plus
   */
  modelId?: string;
  /**
   * @example
   * 2025-01-21T16:37:17.497206762
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      modelId: 'modelId',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': RunAgentResponseBodyDataResponseChoices },
      created: 'number',
      id: 'string',
      modelId: 'string',
      time: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


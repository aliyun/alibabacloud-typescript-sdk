// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSummaryTaskResultResponseBodyDataChoices } from "./GetSummaryTaskResultResponseBodyDataChoices";
import { GetSummaryTaskResultResponseBodyDataUsage } from "./GetSummaryTaskResultResponseBodyDataUsage";


export class GetSummaryTaskResultResponseBodyData extends $dara.Model {
  choices?: GetSummaryTaskResultResponseBodyDataChoices[];
  /**
   * @example
   * 1726285125915
   */
  created?: number;
  /**
   * @example
   * 1202
   */
  id?: string;
  /**
   * @example
   * qwen-max
   */
  modelId?: string;
  /**
   * @example
   * 0bc13a9517168617617186457e401f
   */
  requestId?: string;
  /**
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  /**
   * @example
   * 300
   */
  totalTokens?: number;
  usage?: GetSummaryTaskResultResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      modelId: 'modelId',
      requestId: 'requestId',
      time: 'time',
      totalTokens: 'totalTokens',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': GetSummaryTaskResultResponseBodyDataChoices },
      created: 'number',
      id: 'string',
      modelId: 'string',
      requestId: 'string',
      time: 'string',
      totalTokens: 'number',
      usage: GetSummaryTaskResultResponseBodyDataUsage,
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


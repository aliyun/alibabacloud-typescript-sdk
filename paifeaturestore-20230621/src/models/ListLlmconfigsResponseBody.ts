// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLLMConfigsResponseBodyLLMConfigs } from "./ListLlmconfigsResponseBodyLlmconfigs";


export class ListLLMConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  LLMConfigs?: ListLLMConfigsResponseBodyLLMConfigs[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6mbU5D/SFHCHMApYkMcWlp5
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 898DB17C-09E9-5C41-909D-269BA183EB92
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      LLMConfigs: 'LLMConfigs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      LLMConfigs: { 'type': 'array', 'itemType': ListLLMConfigsResponseBodyLLMConfigs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.LLMConfigs)) {
      $dara.Model.validateArray(this.LLMConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


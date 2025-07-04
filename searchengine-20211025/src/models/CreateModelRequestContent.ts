// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateModelRequestContentRequest } from "./CreateModelRequestContentRequest";
import { CreateModelRequestContentResponse } from "./CreateModelRequestContentResponse";


export class CreateModelRequestContent extends $dara.Model {
  /**
   * @example
   * 128
   */
  dimension?: number;
  /**
   * @example
   * POST
   */
  method?: string;
  /**
   * @example
   * text_embedding
   */
  modelType?: string;
  request?: CreateModelRequestContentRequest;
  response?: CreateModelRequestContentResponse;
  /**
   * @example
   * http://***.platform-cn-shanghai.opensearch.aliyuncs.com/v3/openapi/workspaces/default/text-embedding/ops-text-embedding-001
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'dimension',
      method: 'method',
      modelType: 'modelType',
      request: 'request',
      response: 'response',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'number',
      method: 'string',
      modelType: 'string',
      request: CreateModelRequestContentRequest,
      response: CreateModelRequestContentResponse,
      url: 'string',
    };
  }

  validate() {
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
    }
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


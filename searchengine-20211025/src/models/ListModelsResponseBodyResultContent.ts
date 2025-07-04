// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListModelsResponseBodyResultContentRequest } from "./ListModelsResponseBodyResultContentRequest";
import { ListModelsResponseBodyResultContentResponse } from "./ListModelsResponseBodyResultContentResponse";


export class ListModelsResponseBodyResultContent extends $dara.Model {
  /**
   * @example
   * POST
   */
  method?: string;
  /**
   * @example
   * test
   */
  modelName?: string;
  /**
   * @example
   * text_embedding
   */
  modelType?: string;
  request?: ListModelsResponseBodyResultContentRequest;
  response?: ListModelsResponseBodyResultContentResponse;
  /**
   * @example
   * http://***.platform-cn-shanghai.opensearch.aliyuncs.com/v3/openapi/workspaces/default/text-embedding/ops-text-embedding-001
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'method',
      modelName: 'modelName',
      modelType: 'modelType',
      request: 'request',
      response: 'response',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      modelName: 'string',
      modelType: 'string',
      request: ListModelsResponseBodyResultContentRequest,
      response: ListModelsResponseBodyResultContentResponse,
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


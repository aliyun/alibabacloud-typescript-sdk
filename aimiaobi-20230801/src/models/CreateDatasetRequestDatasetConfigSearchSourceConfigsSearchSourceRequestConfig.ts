// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders } from "./CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders";
import { CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams } from "./CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams";


export class CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig extends $dara.Model {
  /**
   * @example
   * {}
   */
  body?: string;
  /**
   * @example
   * 3000
   */
  connectTimeout?: number;
  headers?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders[];
  /**
   * @example
   * 请求方式
   */
  method?: string;
  params?: CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams[];
  /**
   * @example
   * true
   */
  pathParamsEnable?: boolean;
  /**
   * @example
   * 3000
   */
  socketTimeout?: number;
  /**
   * @example
   * api地址
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      connectTimeout: 'ConnectTimeout',
      headers: 'Headers',
      method: 'Method',
      params: 'Params',
      pathParamsEnable: 'PathParamsEnable',
      socketTimeout: 'SocketTimeout',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      connectTimeout: 'number',
      headers: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders },
      method: 'string',
      params: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams },
      pathParamsEnable: 'boolean',
      socketTimeout: 'number',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


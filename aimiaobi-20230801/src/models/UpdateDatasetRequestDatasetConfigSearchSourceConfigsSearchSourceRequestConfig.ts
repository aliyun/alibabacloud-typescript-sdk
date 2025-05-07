// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders } from "./UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders";
import { UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams } from "./UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams";


export class UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfig extends $dara.Model {
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
  headers?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders[];
  /**
   * @example
   * 请求方式
   */
  method?: string;
  params?: UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams[];
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
      headers: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigHeaders },
      method: 'string',
      params: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigsSearchSourceRequestConfigParams },
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


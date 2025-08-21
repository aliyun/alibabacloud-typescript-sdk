// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableEsInstanceIdsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The name of the Elasticsearch cluster.
   * 
   * @example
   * instanceName
   */
  description?: string;
  /**
   * @remarks
   * The address that is used to access the Elasticsearch cluster over the Internet.
   * 
   * @example
   * http://es-cn-n6w1o1x0w001c****.elasticsearch.aliyuncs.com:9200
   */
  endpoint?: string;
  /**
   * @remarks
   * The ID of the Elasticsearch cluster.
   * 
   * @example
   * es-cn-n6w1o1x0w001c****
   */
  esInstanceId?: string;
  /**
   * @remarks
   * The address that is used to access the Kibana console of the Elasticsearch cluster over the Internet.
   * 
   * @example
   * https://es-cn-n6w1o1x0w001c****.kibana.elasticsearch.aliyuncs.com:5601
   */
  kibanaEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      endpoint: 'endpoint',
      esInstanceId: 'esInstanceId',
      kibanaEndpoint: 'kibanaEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endpoint: 'string',
      esInstanceId: 'string',
      kibanaEndpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEsInstanceIdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: ListAvailableEsInstanceIdsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAvailableEsInstanceIdsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


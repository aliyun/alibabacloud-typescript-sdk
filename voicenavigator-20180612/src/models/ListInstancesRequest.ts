// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * A JSON-formatted string that contains a list of digital worker instance IDs.
   * 
   * @example
   * ["e4bebxxxxxxxxxxx"]
   */
  instanceIdListJsonString?: string;
  /**
   * @remarks
   * The instance name. This parameter is used for filtering.
   * 
   * @example
   * 测试
   */
  name?: string;
  /**
   * @remarks
   * The NLU service type. This parameter is used to filter instances by the source of their conversational AI capabilities. If you do not set this parameter, instances of all types are returned.
   * 
   * - `MANAGED`: managed. This value is deprecated.
   * 
   * - `AUTHORIZED`: authorized. In the public cloud, this indicates the Chatbot service.
   * 
   * - `PROVIDED`: private. This service is configured in the console with parameters such as `as`, `sk`, and `chatEndpoint`.
   * 
   * - `CCC_AUTHORIZED`: a chatbot authorized by Cloud Connect Center (CCC).
   * 
   * - `CCC_FUNCTION`: Alibaba Cloud Function Compute.
   * 
   * - `SSE_FUNCTION`: a streaming function service. This refers to a Function Compute instance that supports Server-Sent Events (SSE) for integration with third-party large language model (LLM) chatbots.
   * 
   * - `PROMPTS`: integration with foundational models such as Qwen.
   * 
   * - `LOCAL`: a private cloud instance of Chatbot.
   * 
   * @example
   * ["CCC_AUTHORIZED"]
   */
  nluServiceTypeListJsonString?: string;
  /**
   * @remarks
   * The inbound number. This parameter is used for filtering.
   * 
   * @example
   * 021xxxxxxx
   */
  number?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The instance status. This parameter is used for filtering. If you do not set this parameter, instances in all statuses are returned.
   * 
   * - `DISABLED`: disabled
   * 
   * - `PUBLISHED`: published
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > If you set `UnionSource` to `CCC`, set this parameter to the ID of your CCC instance.
   * 
   * @example
   * zhyl
   */
  unionInstanceId?: string;
  /**
   * @remarks
   * The source.
   * 
   * - `CCC`: Cloud Connect Center
   * 
   * @example
   * CCC
   */
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdListJsonString: 'InstanceIdListJsonString',
      name: 'Name',
      nluServiceTypeListJsonString: 'NluServiceTypeListJsonString',
      number: 'Number',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      unionInstanceId: 'UnionInstanceId',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdListJsonString: 'string',
      name: 'string',
      nluServiceTypeListJsonString: 'string',
      number: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      unionInstanceId: 'string',
      unionSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


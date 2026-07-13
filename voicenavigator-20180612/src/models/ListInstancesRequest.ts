// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of digital employee scenario IDs.
   * 
   * @example
   * ["e4bebxxxxxxxxxxx"]
   */
  instanceIdListJsonString?: string;
  /**
   * @remarks
   * The scenario name used as a filter condition.
   * 
   * @example
   * 测试
   */
  name?: string;
  /**
   * @remarks
   * The NLU type used to filter by dialog capability source. If this parameter is not specified, all types are selected.
   * 
   *  * MANAGED: managed (deprecated).
   * 
   *  * AUTHORIZED: authorized. In the public cloud, this refers to Chatbot service.
   * 
   *  * PROVIDED: private. Configured by specifying the AccessKey ID, AccessKey Secret, and chatEndpoint in the O&M console.
   * * CCC_AUTHORIZED: uses a Chatbot authorized by Cloud Call Center.
   * 
   * * CCC_FUNCTION: uses Alibaba Cloud Function Compute.
   * 
   * * SSE_FUNCTION: uses a streaming function service. Function Compute that supports SSE, used to connect to third-party large language model chatbots.
   * 
   * 
   * * PROMPTS: connects to Qwen foundation models.
   * 
   * * LOCAL: private cloud, local Chatbot.
   * 
   * @example
   * ["CCC_AUTHORIZED"]
   */
  nluServiceTypeListJsonString?: string;
  /**
   * @remarks
   * The inbound number used as a filter condition.
   * 
   * @example
   * 021xxxxxxx
   */
  number?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The scenario status used as a filter condition. If this parameter is not specified, all statuses are selected.
   * * DISABLED: offline.
   * * PUBLISHED: published.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > When UnionSource is set to CCC, set UnionInstanceId to the instance ID of Cloud Call Center.
   * 
   * @example
   * zhyl
   */
  unionInstanceId?: string;
  /**
   * @remarks
   * The source.
   * * CCC: Cloud Call Center.
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


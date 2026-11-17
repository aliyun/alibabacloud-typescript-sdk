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
   * The filter condition for the scenario name.
   * 
   * @example
   * Test
   */
  name?: string;
  /**
   * @remarks
   * The NLU type and the filter condition for the source of dialog capabilities. If you do not specify this parameter, all types are selected. Valid values:
   * 
   *  * MANAGED: **[Deprecated]** Managed.
   * 
   *  * AUTHORIZED: Authorized. Public cloud: Chatbot service.
   * 
   *  * PROVIDED: Private. Configured by specifying the AccessKey ID, AccessKey secret, and chatEndpoint in the O&M console.
   * * CCC_AUTHORIZED: Uses Chatbot authorized by Cloud Call Center.
   * 
   * * CCC_FUNCTION: Uses Alibaba Cloud Function Compute.
   * 
   * * SSE_FUNCTION: Uses streaming function services. Supports Function Compute with Server-Sent Events (SSE) for integrating third-party large language model chatbots.
   * 
   * 
   * * PROMPTS: Integrates with foundation models such as Qwen.
   * 
   * * LOCAL: Apsara Stack. Local Chatbot.
   * 
   * @example
   * ["CCC_AUTHORIZED"]
   */
  nluServiceTypeListJsonString?: string;
  /**
   * @remarks
   * The filter condition for the inbound number.
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
   * The filter condition for the current scenario status. If you do not specify this parameter, all statuses are selected by default. Valid values:
   * * DISABLED: Offline.
   * * PUBLISHED: Published.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > If UnionSource is set to CCC, set UnionInstanceId to the instance ID of Cloud Call Center.
   * 
   * @example
   * zhyl
   */
  unionInstanceId?: string;
  /**
   * @remarks
   * The source. Valid values:
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


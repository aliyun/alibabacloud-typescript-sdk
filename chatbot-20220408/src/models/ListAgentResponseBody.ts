// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business space ID.
   * 
   * @example
   * 881
   */
  agentId?: number;
  /**
   * @remarks
   * The business space signature, used to identify the business space in Platform-as-a-Service (PaaS) API calls.
   * 
   * @example
   * 4e7400028e6f4a7393ed3acf6a7b8927_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The name of the business space.
   * 
   * @example
   * 业务空间_881
   */
  agentName?: string;
  /**
   * @remarks
   * Details of the associated commodity instance. The object keys are commodity codes.
   */
  instanceInfos?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentKey: 'AgentKey',
      agentName: 'AgentName',
      instanceInfos: 'InstanceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentKey: 'string',
      agentName: 'string',
      instanceInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.instanceInfos) {
      $dara.Model.validateMap(this.instanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of business spaces.
   */
  data?: ListAgentResponseBodyData[];
  /**
   * @remarks
   * The page number of the returned results.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F55D90C1-31BE-4B2A-AA3F-25EFC36F9419
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of business spaces that match the query.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAgentResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


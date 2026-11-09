// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentRuntimeStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The agent display name, which is determined by both the agent platform and the agent provider. For example, OpenClaw under the ENTERPRISE platform is displayed as OpenClaw, and OpenClaw under the JVS platform is displayed as JVS Claw.
   * 
   * @example
   * Agentic Computer
   */
  agentDisplayName?: string;
  /**
   * @remarks
   * The agent platform, such as ENTERPRISE_AGENTIC_COMPUTER.
   * 
   * @example
   * ENTERPRISE_AGENTIC_COMPUTER
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The agent provider, such as AgenticComputer.
   * 
   * @example
   * AgenticComputer
   */
  agentProvider?: string;
  /**
   * @remarks
   * The number of expired runtime resources in the group. A runtime is counted as expired if its resource status is Expired or Ceased, case-insensitive.
   * 
   * @example
   * 0
   */
  expiredCount?: number;
  /**
   * @remarks
   * The number of runtime resources without channel configurations in the group, which is the total number of runtime resources minus the number of runtime resources with channel configurations.
   * 
   * @example
   * 3
   */
  noChannelConfiguredRuntimeCount?: number;
  /**
   * @remarks
   * The number of runtime resources without model configurations in the group. A runtime is considered to have a model configured if a model is configured for the runtime itself or its associated resource group.
   * 
   * @example
   * 2
   */
  noModelConfiguredRuntimeCount?: number;
  /**
   * @remarks
   * The number of risky runtime resources in the group, deduplicated by runtime ID. A runtime is counted as risky if it has any of the following risks: model configuration modified, third-party channel configuration modified, or agent being uninstalled.
   * 
   * @example
   * 1
   */
  riskyRuntimeCount?: number;
  /**
   * @remarks
   * The total number of runtime resources in the group, deduplicated by runtime ID.
   * 
   * @example
   * 10
   */
  totalRuntimeCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentDisplayName: 'AgentDisplayName',
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      expiredCount: 'ExpiredCount',
      noChannelConfiguredRuntimeCount: 'NoChannelConfiguredRuntimeCount',
      noModelConfiguredRuntimeCount: 'NoModelConfiguredRuntimeCount',
      riskyRuntimeCount: 'RiskyRuntimeCount',
      totalRuntimeCount: 'TotalRuntimeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentDisplayName: 'string',
      agentPlatform: 'string',
      agentProvider: 'string',
      expiredCount: 'number',
      noChannelConfiguredRuntimeCount: 'number',
      noModelConfiguredRuntimeCount: 'number',
      riskyRuntimeCount: 'number',
      totalRuntimeCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentRuntimeStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of runtime statistics grouped by agent platform and agent provider. If AgentProvider is specified but no matching runtimes are found, a record with all statistical values set to 0 is returned.
   */
  data?: GetAgentRuntimeStatisticResponseBodyData[];
  /**
   * @remarks
   * The request ID, which uniquely identifies the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned statistics records, which is the length of the Data list.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetAgentRuntimeStatisticResponseBodyData },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentEventResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 5zuzvcfe
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * prod-chagee-bc-activity-elespin
   */
  appName?: string;
  /**
   * @remarks
   * The asset name.
   * 
   * @example
   * 25.2.2.83
   */
  assetName?: string;
  /**
   * @remarks
   * The type of the risky asset. Valid values:
   * 1. rag
   * 2. internet
   * 3. datasets
   * 4. tool
   * 5. model
   * 6. skill
   * 7. app
   * 8. identity
   * 
   * @example
   * tool
   */
  assetType?: string;
  /**
   * @remarks
   * The check time.
   * 
   * @example
   * 1763949968
   */
  checkTime?: string;
  /**
   * @remarks
   * The event handling time.
   * 
   * @example
   * 1763949968
   */
  handleTime?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 17616
   */
  id?: number;
  /**
   * @remarks
   * The infrastructure instance ID.
   * 
   * @example
   * i-test
   */
  infraInstanceId?: string;
  /**
   * @remarks
   * The public IP address of the infrastructure.
   * 
   * @example
   * 1.2.3.4
   */
  infraInternetIp?: string;
  /**
   * @remarks
   * The private IP address of the infrastructure.
   * 
   * @example
   * 10.0.0.3
   */
  infraIntranetIp?: string;
  /**
   * @remarks
   * The infrastructure name.
   * 
   * @example
   * test
   */
  infraName?: string;
  /**
   * @remarks
   * The infrastructure region.
   * 
   * @example
   * cn-shanghai
   */
  infraRegionId?: string;
  /**
   * @remarks
   * The infrastructure type.
   * 
   * @example
   * ECS
   */
  infraType?: string;
  /**
   * @remarks
   * The risk description.
   * 
   * @example
   * The workflow does not have AI security guardrails enabled, which may lead to compliance violations, prompt injection and bypass, sensitive data leaks, and other risks
   */
  riskDesc?: string;
  /**
   * @remarks
   * The risk level of the detected alert. Valid values:
   * 
   * - **high**: High.
   * - **medium**: Medium.
   * - **low**: Low.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The risk name.
   * 
   * @example
   * Weak password
   */
  riskName?: string;
  skillId?: number;
  /**
   * @remarks
   * The event source. Valid values:
   * 1. cspm
   * 2. aiguard
   * 3. SASE
   * 4. SAS 
   * 5. Agent-Runtime-Guard
   * 
   * @example
   * SASE
   */
  source?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 1. unhandled: Pending.
   * 2. handling: Being processed.
   * 3. fixed: Fixed.
   * 4. ignored: Ignored.
   * 5. rescanned: Rescanned.
   * 
   * @example
   * unhandled
   */
  status?: string;
  /**
   * @remarks
   * The cloud asset vendor. Valid values:
   * - **DIFY**: DIFY.
   * - **BAILIAN**: BAILIAN.
   * - **VOLCAI**: VOLCAI.
   * - **AGENTRUN**: AGENTRUN.
   * - **PAI**: PAI.
   * - **OpenClaw**: OpenClaw.
   * 
   * @example
   * DIFY
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      assetName: 'AssetName',
      assetType: 'AssetType',
      checkTime: 'CheckTime',
      handleTime: 'HandleTime',
      id: 'Id',
      infraInstanceId: 'InfraInstanceId',
      infraInternetIp: 'InfraInternetIp',
      infraIntranetIp: 'InfraIntranetIp',
      infraName: 'InfraName',
      infraRegionId: 'InfraRegionId',
      infraType: 'InfraType',
      riskDesc: 'RiskDesc',
      riskLevel: 'RiskLevel',
      riskName: 'RiskName',
      skillId: 'SkillId',
      source: 'Source',
      status: 'Status',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      assetName: 'string',
      assetType: 'string',
      checkTime: 'string',
      handleTime: 'string',
      id: 'number',
      infraInstanceId: 'string',
      infraInternetIp: 'string',
      infraIntranetIp: 'string',
      infraName: 'string',
      infraRegionId: 'string',
      infraType: 'string',
      riskDesc: 'string',
      riskLevel: 'string',
      riskName: 'string',
      skillId: 'number',
      source: 'string',
      status: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIAgentEventResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The NextToken value returned when the NextToken-based pagination method is used.
   * 
   * @example
   * d6yVpGGP9cH8f9AWtqEXqOawJdolFvFeqJJSIPnYLoGc7/XPd5nbDfZcn1mJCj66Ep3Gbr55tl4NuBtNwsc0A0qvqC2Onfm9h2QmtG8HhaulnPkGmBnhntKqJmpRptTU
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records in the query result.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      nextToken: 'string',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIAgentEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of event information returned.
   */
  data?: ListAIAgentEventResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListAIAgentEventResponseBodyPageInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9FDE3D6F-26BD-5937-B0E5-8F47962B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAIAgentEventResponseBodyData },
      pageInfo: ListAIAgentEventResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


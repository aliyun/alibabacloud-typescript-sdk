// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentEventRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent application.
   * 
   * @example
   * 99f30e6b-8374-4a45-8830-439f178c5463
   */
  appId?: string;
  /**
   * @remarks
   * Filters the agent list by application name.
   * 
   * @example
   * erH
   */
  appName?: string;
  /**
   * @remarks
   * The asset name.
   * 
   * @example
   * 13.115.192.70
   */
  assetName?: string;
  /**
   * @remarks
   * The type of the agent asset. Valid values:
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
   * identity
   */
  assetType?: string;
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
   * The infrastructure instance ID.
   * 
   * @example
   * i-test
   */
  infraInstanceId?: string;
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
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Sort direction
   */
  order?: string;
  /**
   * @remarks
   * Sort field, currently supports CheckTime
   */
  orderBy?: string;
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
   * The risk level of the check item to query. Valid values:
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
   * The risk name. Fuzzy match is supported.
   * 
   * @example
   * defense
   */
  riskName?: string;
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
   * CSPM
   */
  source?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * 1. unhandled: Pending.
   * 2. handling: Being processed.
   * 3. fixed: Fixed.
   * 4. ignored: Ignored.
   * 5. rescanned: Rescanned.
   * 
   * @example
   * fixed
   */
  status?: string;
  /**
   * @remarks
   * The list of statuses.
   */
  statusList?: string[];
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
      currentPage: 'CurrentPage',
      infraInstanceId: 'InfraInstanceId',
      infraName: 'InfraName',
      infraRegionId: 'InfraRegionId',
      lang: 'Lang',
      order: 'Order',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      riskLevel: 'RiskLevel',
      riskName: 'RiskName',
      source: 'Source',
      status: 'Status',
      statusList: 'StatusList',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      assetName: 'string',
      assetType: 'string',
      currentPage: 'number',
      infraInstanceId: 'string',
      infraName: 'string',
      infraRegionId: 'string',
      lang: 'string',
      order: 'string',
      orderBy: 'string',
      pageSize: 'number',
      riskLevel: 'string',
      riskName: 'string',
      source: 'string',
      status: 'string',
      statusList: { 'type': 'array', 'itemType': 'string' },
      vendor: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.statusList)) {
      $dara.Model.validateArray(this.statusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


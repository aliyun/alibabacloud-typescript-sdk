// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelTemplatesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Agent platform.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The Agent platform list. Supports COMMON. If specified together with AgentPlatform, AgentPlatform takes precedence and this list is ignored. Defaults to ENTERPRISE if no platform filter is specified. To query Common model groups, explicitly include COMMON. If filtering by Provider simultaneously, set the value to Common.
   * 
   * @example
   * ENTERPRISE
   */
  agentPlatformList?: string[];
  /**
   * @remarks
   * The Agent provider name.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * The Agent provider list. Supports Common. If specified together with AgentProvider, AgentProvider takes precedence and this list is ignored. To query Common model groups, explicitly include COMMON in the platform filter.
   * 
   * @example
   * OpenClaw
   */
  agentProviderList?: string[];
  /**
   * @remarks
   * The business type.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * Specifies whether models are configured in the group.
   * 
   * @example
   * true
   */
  hasModel?: boolean;
  /**
   * @remarks
   * The list of template group IDs to filter by.
   */
  modelTemplateIdListShrink?: string;
  /**
   * @remarks
   * The model group name. Fuzzy match is supported.
   */
  name?: string;
  /**
   * @remarks
   * The page number, starting from 1. Values 0 and 1 return the same result.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The authorization scope filter. Valid values: ALL_USER, USER_MIXED, or RESOURCE_MIXED (strictly uppercase. Case variants or unknown values return InvalidParameter). If not specified, no filtering is applied. Unlike create/update operations, the filter scenario allows RESOURCE_MIXED (to filter non-Common model groups).
   * 
   * @example
   * ALL_USER
   */
  refScope?: string;
  /**
   * @remarks
   * The template source filter. Valid values:
   * - User: tenant-created (default if not specified).
   * - System: system preset.
   * 
   * @example
   * User
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentPlatformList: 'AgentPlatformList',
      agentProvider: 'AgentProvider',
      agentProviderList: 'AgentProviderList',
      bizType: 'BizType',
      hasModel: 'HasModel',
      modelTemplateIdListShrink: 'ModelTemplateIdList',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      refScope: 'RefScope',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentPlatformList: { 'type': 'array', 'itemType': 'string' },
      agentProvider: 'string',
      agentProviderList: { 'type': 'array', 'itemType': 'string' },
      bizType: 'number',
      hasModel: 'boolean',
      modelTemplateIdListShrink: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      refScope: 'string',
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentPlatformList)) {
      $dara.Model.validateArray(this.agentPlatformList);
    }
    if(Array.isArray(this.agentProviderList)) {
      $dara.Model.validateArray(this.agentProviderList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


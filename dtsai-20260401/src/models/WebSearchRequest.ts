// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebSearchRequest extends $dara.Model {
  /**
   * @remarks
   * The agent name.
   */
  agentName?: string;
  /**
   * @remarks
   * The maximum number of results to return. Default value: 10. Valid values: 1 to 50.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The search query statement.
   * 
   * This parameter is required.
   * 
   * @example
   * Spring Boot
   */
  query?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The list of domain names.
   */
  urlScopeDomains?: string;
  /**
   * @remarks
   * The URL scope mode.
   */
  urlScopeMode?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      maxResults: 'MaxResults',
      query: 'Query',
      regionId: 'RegionId',
      urlScopeDomains: 'UrlScopeDomains',
      urlScopeMode: 'UrlScopeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      maxResults: 'number',
      query: 'string',
      regionId: 'string',
      urlScopeDomains: 'string',
      urlScopeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


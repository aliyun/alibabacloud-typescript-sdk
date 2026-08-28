// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters by target agent ID.
   * 
   * @example
   * agent-123456
   */
  agentId?: string;
  /**
   * @remarks
   * Filters by target agent version number.
   * 
   * @example
   * v1
   */
  agentVersion?: string;
  /**
   * @remarks
   * Filters by collaboration component type. Valid values: MATRIX_CLIENT, MATRIX_FEDERATION, ELEMENT_WEB.
   * 
   * @example
   * ELEMENT_WEB
   */
  collaborationComponent?: string;
  /**
   * @remarks
   * The maximum number of records per page. Valid values: 1 to 100. If this parameter is not specified, 20 records are returned by default.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. Do not specify this parameter for the first request. For subsequent requests, specify the nextToken value returned in the previous response.
   * 
   * @example
   * djE6YWdlbnRjb3JlLnNlcnZpY2UtZW5kcG9pbnQubGlzdDoyMA
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters by the workspace resource binding ID of the target collaboration component.
   * 
   * @example
   * wrb-123456
   */
  resourceBindingId?: string;
  /**
   * @remarks
   * Filters by service endpoint status. Valid values: CREATING, READY, UPDATING, DEGRADED, DISABLED, DELETING.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Filters by target type. Valid values: AGENT_VERSION, TEAM_COLLABORATION.
   * 
   * @example
   * AGENT_VERSION
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      agentVersion: 'agentVersion',
      collaborationComponent: 'collaborationComponent',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      resourceBindingId: 'resourceBindingId',
      status: 'status',
      targetType: 'targetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      collaborationComponent: 'string',
      maxResults: 'number',
      nextToken: 'string',
      resourceBindingId: 'string',
      status: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


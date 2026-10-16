// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the results by target agent ID.
   * 
   * @example
   * agent-123456
   */
  agentId?: string;
  /**
   * @remarks
   * Filters the results by target agent version.
   * 
   * @example
   * v1
   */
  agentVersion?: string;
  /**
   * @remarks
   * Filters the results by collaboration component type. Valid values: MATRIX_CLIENT, MATRIX_FEDERATION, and ELEMENT_WEB.
   * 
   * @example
   * ELEMENT_WEB
   */
  collaborationComponent?: string;
  /**
   * @remarks
   * The maximum number of records to return per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The cursor for querying the next page. Do not specify this parameter for the first call. For subsequent calls, specify the nextToken value returned in the previous response.
   * 
   * @example
   * djE6YWdlbnRjb3JlLnNlcnZpY2UtZW5kcG9pbnQubGlzdDoyMA
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters the results by the workspace resource binding ID of the target collaboration component.
   * 
   * @example
   * wrb-123456
   */
  resourceBindingId?: string;
  /**
   * @remarks
   * Filters the results by service endpoint status. Valid values: CREATING, READY, UPDATING, DEGRADED, DISABLED, and DELETING.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Filters the results by target type. Valid values: AGENT_VERSION and TEAM_COLLABORATION.
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


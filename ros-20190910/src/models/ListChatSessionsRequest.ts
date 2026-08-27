// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * Set this parameter to V2 to route requests to the ROS Agent V2 backend.
   * 
   * @example
   * V2
   */
  agentVersion?: string;
  /**
   * @remarks
   * The number of sessions to return per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Filters sessions by mode. Valid values: IaCCodeNormal and IaCCodePipeline.
   * 
   * @example
   * IaCCodePipeline
   */
  mode?: string;
  /**
   * @remarks
   * The pagination token returned in the previous response. Do not pass this parameter for the first page. Do not reuse an old token after switching Mode.
   * 
   * @example
   * CAES...
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentVersion: 'AgentVersion',
      maxResults: 'MaxResults',
      mode: 'Mode',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentVersion: 'string',
      maxResults: 'number',
      mode: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


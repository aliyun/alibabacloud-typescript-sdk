// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which to start reading.
   * 
   * @example
   * dd6b1b2a-5837-5237-abe4-ff0c89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cluster script. This parameter is valid only for NORMAL scripts.
   */
  scriptId?: string;
  /**
   * @remarks
   * The name of the cluster script. This parameter is valid only for NORMAL scripts and supports fuzzy search.
   */
  scriptName?: string;
  /**
   * @remarks
   * The type of the cluster script. Valid values:
   * 
   * - BOOTSTRAP: a bootstrap script.
   * 
   * - NORMAL: a normal cluster script.
   * 
   * This parameter is required.
   * 
   * @example
   * BOOTSTRAP
   */
  scriptType?: string;
  /**
   * @remarks
   * The list of script statuses.
   */
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      scriptType: 'ScriptType',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      scriptId: 'string',
      scriptName: 'string',
      scriptType: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


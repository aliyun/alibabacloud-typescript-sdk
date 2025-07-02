// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The maximum number of records to retrieve at once.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Marks the current position to start reading from.
   * 
   * @example
   * dd6b1b2a-5837-5237-abe4-ff0c89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The script ID. Only common scripts are supported.
   */
  scriptId?: string;
  /**
   * @remarks
   * The name of the script. Only common scripts are supported. Fuzzy search is supported.
   */
  scriptName?: string;
  /**
   * @remarks
   * Type of cluster script. Possible values:
   * 
   * - BOOTSTRAP: Bootstrap script.
   * - NORMAL: Regular cluster script.
   * 
   * This parameter is required.
   * 
   * @example
   * BOOTSTRAP
   */
  scriptType?: string;
  /**
   * @remarks
   * The script status list.
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


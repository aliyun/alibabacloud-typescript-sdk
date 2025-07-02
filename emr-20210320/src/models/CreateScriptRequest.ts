// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Script } from "./Script";


export class CreateScriptRequest extends $dara.Model {
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
   * The type of the script. Valid values:
   * 
   * *   BOOTSTRAP: indicates a bootstrap action of the Elastic Compute Service (ECS) instance.
   * *   NORMAL: indicates a common script.
   * 
   * This parameter is required.
   * 
   * @example
   * BOOTSTRAP
   */
  scriptType?: string;
  /**
   * @remarks
   * The list of scripts.
   * 
   * This parameter is required.
   */
  scripts?: Script[];
  /**
   * @remarks
   * The timeout period for a manual execution script. You cannot specify a timeout period for a bootstrap action.
   */
  timeoutSecs?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      scriptType: 'ScriptType',
      scripts: 'Scripts',
      timeoutSecs: 'TimeoutSecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      scriptType: 'string',
      scripts: { 'type': 'array', 'itemType': Script },
      timeoutSecs: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scripts)) {
      $dara.Model.validateArray(this.scripts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


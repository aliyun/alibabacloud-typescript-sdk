// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScriptShrinkRequest extends $dara.Model {
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
   * The script.
   * 
   * This parameter is required.
   */
  scriptShrink?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cs-da7476a7679a4d4c9cede62ebe09****
   */
  scriptId?: string;
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
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      scriptShrink: 'Script',
      scriptId: 'ScriptId',
      scriptType: 'ScriptType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      scriptShrink: 'string',
      scriptId: 'string',
      scriptType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


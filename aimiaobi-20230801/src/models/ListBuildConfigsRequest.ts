// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBuildConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public
   */
  agentKey?: string;
  regionId?: string;
  /**
   * @remarks
   * Content category. Valid values: media or government.
   * 
   * @example
   * media
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindConfigGroupRequestResourceInfos } from "./BindConfigGroupRequestResourceInfos";


export class BindConfigGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration group.
   * 
   * This parameter is required.
   * 
   * @example
   * ccg-0chlk9b65lj8z****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the region. Set the value to `cn-shanghai`.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resources to which you want to bind the configuration group.
   * 
   * This parameter is required.
   */
  resourceInfos?: BindConfigGroupRequestResourceInfos[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      regionId: 'RegionId',
      resourceInfos: 'ResourceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      regionId: 'string',
      resourceInfos: { 'type': 'array', 'itemType': BindConfigGroupRequestResourceInfos },
    };
  }

  validate() {
    if(Array.isArray(this.resourceInfos)) {
      $dara.Model.validateArray(this.resourceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


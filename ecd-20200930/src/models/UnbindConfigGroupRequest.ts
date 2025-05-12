// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UnbindConfigGroupRequestResourceInfos } from "./UnbindConfigGroupRequestResourceInfos";


export class UnbindConfigGroupRequest extends $dara.Model {
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
   * The resources from which you want to unbind the configuration group.
   * 
   * This parameter is required.
   */
  resourceInfos?: UnbindConfigGroupRequestResourceInfos[];
  /**
   * @remarks
   * The type of the configuration group.
   * 
   * Valid value:
   * 
   * *   Timer: the scheduled task type.
   * 
   * This parameter is required.
   * 
   * @example
   * Timer
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceInfos: 'ResourceInfos',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceInfos: { 'type': 'array', 'itemType': UnbindConfigGroupRequestResourceInfos },
      type: 'string',
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


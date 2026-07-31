// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterBatchBindModelGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization configuration (JSON string). Internal key names use a fixed underscore style: {"model_ids":[...],"group_ids":["mg_xxx"]}
   * 
   * This parameter is required.
   * 
   * @example
   * {"model_ids":[],"group_ids":["mg_pro"]}
   */
  allowedModelGroupConfig?: string;
  /**
   * @remarks
   * The array of department IDs. You can specify 1 to 50 IDs. If more than 50, call this operation in batches.
   * 
   * This parameter is required.
   * 
   * @example
   * [1001, 1002, 1003]
   */
  clientIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      allowedModelGroupConfig: 'allowedModelGroupConfig',
      clientIdList: 'clientIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedModelGroupConfig: 'string',
      clientIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.clientIdList)) {
      $dara.Model.validateArray(this.clientIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


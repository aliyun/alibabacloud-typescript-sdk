// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployInstanceInfo } from "./DeployInstanceInfo";


export class DeployPipelineInfo extends $dara.Model {
  deployInstanceInfos?: DeployInstanceInfo[];
  /**
   * @example
   * 528f9a66-cbe3-4cd8-91c0-bc4260a13d87
   */
  id?: string;
  /**
   * @example
   * Batch 1 Change
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      deployInstanceInfos: 'deployInstanceInfos',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployInstanceInfos: { 'type': 'array', 'itemType': DeployInstanceInfo },
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.deployInstanceInfos)) {
      $dara.Model.validateArray(this.deployInstanceInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


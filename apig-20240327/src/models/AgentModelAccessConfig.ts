// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentModelAccessConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  consumerIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  modelApiId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerIds: 'consumerIds',
      modelApiId: 'modelApiId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerIds: { 'type': 'array', 'itemType': 'string' },
      modelApiId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.consumerIds)) {
      $dara.Model.validateArray(this.consumerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


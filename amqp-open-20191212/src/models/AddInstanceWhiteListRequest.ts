// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInstanceWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rabbitmq-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 172.0.0.20/30
   */
  whiteListItem?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  whiteListType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      whiteListItem: 'WhiteListItem',
      whiteListType: 'WhiteListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      whiteListItem: { 'type': 'array', 'itemType': 'string' },
      whiteListType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.whiteListItem)) {
      $dara.Model.validateArray(this.whiteListItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


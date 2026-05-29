// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddInstanceWhiteListShrinkRequest extends $dara.Model {
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
  whiteListItemShrink?: string;
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
      whiteListItemShrink: 'WhiteListItem',
      whiteListType: 'WhiteListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      whiteListItemShrink: 'string',
      whiteListType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


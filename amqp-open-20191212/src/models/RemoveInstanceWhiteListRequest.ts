// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveInstanceWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * amqp-cn-5yd3aw******
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 420
   */
  whiteListItemId?: number;
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
      whiteListItemId: 'whiteListItemId',
      whiteListType: 'whiteListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      whiteListItemId: 'number',
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


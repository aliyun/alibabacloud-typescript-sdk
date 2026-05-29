// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceWhiteListRequest extends $dara.Model {
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
   * 2
   */
  whiteListType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      whiteListType: 'whiteListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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


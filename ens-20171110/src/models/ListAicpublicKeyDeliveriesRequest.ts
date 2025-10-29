// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICPublicKeyDeliveriesRequest extends $dara.Model {
  /**
   * @example
   * aic-xxxx-0
   */
  instanceId?: string;
  /**
   * @example
   * g-test
   */
  keyGroup?: string;
  /**
   * @example
   * mykey
   */
  keyName?: string;
  /**
   * @example
   * adb
   */
  keyType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      keyType: 'KeyType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyGroup: 'string',
      keyName: 'string',
      keyType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


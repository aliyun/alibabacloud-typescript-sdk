// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICPublicKeyDeliveriesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * aic-xxxx-0
   */
  instanceId?: string;
  /**
   * @remarks
   * The group of the public key.
   * 
   * @example
   * g-test
   */
  keyGroup?: string;
  /**
   * @remarks
   * The name of the public key.
   * 
   * @example
   * mykey
   */
  keyName?: string;
  /**
   * @remarks
   * The type of the public key.
   * 
   * @example
   * adb
   */
  keyType?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records to display per page.
   * 
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


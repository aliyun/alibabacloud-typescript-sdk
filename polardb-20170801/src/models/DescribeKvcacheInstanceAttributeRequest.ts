// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKVCacheInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the KVCache instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pkv-123456
   */
  KVCacheInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      KVCacheInstanceId: 'KVCacheInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVCacheInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


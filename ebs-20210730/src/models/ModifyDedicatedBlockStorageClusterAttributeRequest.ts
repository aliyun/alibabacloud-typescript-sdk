// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDedicatedBlockStorageClusterAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests.
   * 
   * The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure idempotence ](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * dbsc-cn-od43bf****
   */
  dbscId?: string;
  /**
   * @remarks
   * The new name of the dedicated block storage cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * my-test-dbsc
   */
  dbscName?: string;
  /**
   * @remarks
   * The new description of dedicated block storage cluster.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The region ID of the dedicated block storage cluster. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dbscId: 'DbscId',
      dbscName: 'DbscName',
      description: 'Description',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dbscId: 'string',
      dbscName: 'string',
      description: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


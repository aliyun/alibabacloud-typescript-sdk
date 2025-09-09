// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsRdsInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB-X instance.
   * 
   * > You can call the [DescribeDrdsInstances](https://help.aliyun.com/document_detail/139284.html) operation to query the information about instances in the specified account, such as the IDs of the instances.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*************
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


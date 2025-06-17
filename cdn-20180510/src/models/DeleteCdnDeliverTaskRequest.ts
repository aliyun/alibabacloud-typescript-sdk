// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCdnDeliverTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tracking task that you want to delete. You can call the [DescribeCdnDeliverList](https://help.aliyun.com/document_detail/270877.html) operation to query task IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  deliverId?: number;
  static names(): { [key: string]: string } {
    return {
      deliverId: 'DeliverId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliverId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


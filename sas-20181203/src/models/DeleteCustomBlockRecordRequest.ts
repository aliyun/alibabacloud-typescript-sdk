// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomBlockRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the IP address blocking policy.
   * 
   * > You can call the [DescribeCustomBlockRecords](~~DescribeCustomBlockRecords~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 381**
   */
  id?: number;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


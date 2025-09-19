// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccessKeyLeakDealRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AccessKey pair leak.
   * 
   * > You can call the [DescribeAccesskeyLeakList](~~DescribeAccesskeyLeakList~~) operation to query the ID. You must specify at least one of the Id and **IdList** parameters.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The IDs of AccessKey pair leaks.
   */
  idList?: number[];
  /**
   * @remarks
   * The remarks that are added.
   * 
   * @example
   * disabled.
   */
  remark?: string;
  /**
   * @remarks
   * The method to handle the AccessKey pair leak. Valid values:
   * 
   * *   **manual**: manually handle
   * *   **disable**: disable
   * *   **add-whitelist**: add to the whitelist
   * 
   * This parameter is required.
   * 
   * @example
   * disable
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      idList: 'IdList',
      remark: 'Remark',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      idList: { 'type': 'array', 'itemType': 'number' },
      remark: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.idList)) {
      $dara.Model.validateArray(this.idList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


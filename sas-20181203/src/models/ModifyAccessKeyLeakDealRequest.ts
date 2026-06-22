// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccessKeyLeakDealRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AccessKey pair leak record.
   * >Call the [DescribeAccesskeyLeakList](~~DescribeAccesskeyLeakList~~) operation to obtain this parameter. This parameter and the **IdList** parameter cannot both be empty.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The IDs of the AccessKey pair leak records.
   */
  idList?: number[];
  /**
   * @remarks
   * The remarks for handling the AccessKey pair leak record.
   * 
   * @example
   * disabled.
   */
  remark?: string;
  /**
   * @remarks
   * The method to handle the AccessKey pair leak information. Valid values:
   * - **manual**: Manual handling.
   * - **disable**: Disable.
   * - **add-whitelist**: Add to whitelist.
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


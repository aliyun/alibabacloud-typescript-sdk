// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustinsParamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * load_test_4009266
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      name: 'Name',
      regionId: 'RegionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      name: 'string',
      regionId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


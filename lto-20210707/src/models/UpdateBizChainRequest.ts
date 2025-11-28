// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBizChainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizChainId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  regionId?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      bizChainId: 'BizChainId',
      name: 'Name',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainId: 'string',
      name: 'string',
      regionId: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


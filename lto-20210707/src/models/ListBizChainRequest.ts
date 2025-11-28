// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBizChainRequest extends $dara.Model {
  bizChainId?: string;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  num?: number;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      bizChainId: 'BizChainId',
      name: 'Name',
      num: 'Num',
      regionId: 'RegionId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainId: 'string',
      name: 'string',
      num: 'number',
      regionId: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


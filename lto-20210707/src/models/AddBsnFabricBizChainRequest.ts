// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBsnFabricBizChainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeList?: string;
  regionId?: string;
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userCode?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      name: 'Name',
      nodeList: 'NodeList',
      regionId: 'RegionId',
      remark: 'Remark',
      userCode: 'UserCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      name: 'string',
      nodeList: 'string',
      regionId: 'string',
      remark: 'string',
      userCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


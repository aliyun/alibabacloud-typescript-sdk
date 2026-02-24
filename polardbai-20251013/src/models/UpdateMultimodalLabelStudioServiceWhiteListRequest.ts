// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMultimodalLabelStudioServiceWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  DBClusterId?: string;
  /**
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      sourceRegionId: 'SourceRegionId',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      sourceRegionId: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.whiteList)) {
      $dara.Model.validateArray(this.whiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


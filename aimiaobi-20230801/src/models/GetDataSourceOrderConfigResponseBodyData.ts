// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList } from "./GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList";


export class GetDataSourceOrderConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  totalDocSize?: number;
  userConfigDataSourceList?: GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList[];
  static names(): { [key: string]: string } {
    return {
      totalDocSize: 'TotalDocSize',
      userConfigDataSourceList: 'UserConfigDataSourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalDocSize: 'number',
      userConfigDataSourceList: { 'type': 'array', 'itemType': GetDataSourceOrderConfigResponseBodyDataUserConfigDataSourceList },
    };
  }

  validate() {
    if(Array.isArray(this.userConfigDataSourceList)) {
      $dara.Model.validateArray(this.userConfigDataSourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


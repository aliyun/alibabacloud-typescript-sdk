// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenECRequestURLList } from "./ScreenEcrequestUrllist";


export class ScreenECRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HTTP_FILES
   */
  dataSourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  URLList?: ScreenECRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      URLList: { 'type': 'array', 'itemType': ScreenECRequestURLList },
    };
  }

  validate() {
    if(Array.isArray(this.URLList)) {
      $dara.Model.validateArray(this.URLList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


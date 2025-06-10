// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DetectPancAdvanceRequestURLList } from "./DetectPancAdvanceRequestUrllist";


export class DetectPancAdvanceRequest extends $dara.Model {
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
  URLList?: DetectPancAdvanceRequestURLList[];
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      URLList: 'URLList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      URLList: { 'type': 'array', 'itemType': DetectPancAdvanceRequestURLList },
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


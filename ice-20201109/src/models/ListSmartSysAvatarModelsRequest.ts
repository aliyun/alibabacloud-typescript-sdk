// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmartSysAvatarModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of items to return on each page. The default value is 10. The maximum value is 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The SDK version.
   */
  sdkVersion?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sdkVersion: 'SdkVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      sdkVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


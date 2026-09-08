// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportDoNotCallNumbersRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the OSS file. You can obtain the key from the response of the GetDoNotCallFileUploadParameters API. This parameter is required only for file uploads.
   * 
   * @example
   * temp/blacklist/import/15772471154xxxx/ccc-test/20220315100340/blacklist.xlsx
   */
  filePath?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * A JSON string that represents an array of do-not-call numbers.
   * 
   * @example
   * ["1900000****","1312121****"]
   */
  numberList?: string;
  /**
   * @remarks
   * The remark for the do-not-call numbers.
   * 
   * @example
   * 测试
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      instanceId: 'InstanceId',
      numberList: 'NumberList',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      instanceId: 'string',
      numberList: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportDoNotCallNumbersRequest extends $dara.Model {
  /**
   * @example
   * temp/blacklist/import/15772471154xxxx/ccc-test/20220315100340/blacklist.xlsx
   */
  filePath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * ["1900000****","1312121****"]
   */
  numberList?: string;
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


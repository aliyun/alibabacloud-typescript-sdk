// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCaseFileUploadUrlResponseBodyData extends $dara.Model {
  /**
   * @example
   * ccc-test/namelist.csv
   */
  caseFileKey?: string;
  /**
   * @example
   * https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com/ccc-test/namelist.csv?Expires=1642067227&OSSAccessKeyId=****&Signature=****
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      caseFileKey: 'CaseFileKey',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseFileKey: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


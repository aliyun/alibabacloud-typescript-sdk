// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateFileImportTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * https://test.oss-cn-hangzhou.aliyuncs.com/idaas_ly77wa2oexrciw5v672vxxxx/tmp/eiam_v2_user_import_1766469463365.csv
   */
  fileDownloadUrl?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileDownloadUrl: 'FileDownloadUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileDownloadUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


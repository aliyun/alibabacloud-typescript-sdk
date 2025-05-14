// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpenUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_PBKT0xxx
   */
  appType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://www.aliwork.com/fileHandle?appType=APP_VN7I6xxx&fileName=fileName.xlsx&instId=&type=download
   */
  fileUrl?: string;
  /**
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hexxxx
   */
  systemToken?: string;
  /**
   * @example
   * 60000L
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      fileUrl: 'FileUrl',
      language: 'Language',
      systemToken: 'SystemToken',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      fileUrl: 'string',
      language: 'string',
      systemToken: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


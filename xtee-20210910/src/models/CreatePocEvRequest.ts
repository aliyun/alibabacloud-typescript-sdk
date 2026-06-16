// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePocEvRequest extends $dara.Model {
  /**
   * @remarks
   * The date format type.
   * 
   * @example
   * yyyyMMdd
   */
  dateFormat?: string;
  /**
   * @remarks
   * The file name.
   * > The file name must end with txt or sql. Example: test.txt or test.sql.
   * 
   * @example
   * test.csv
   */
  fileName?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * CSV
   */
  fileType?: string;
  /**
   * @remarks
   * The file URL.
   * 
   * @example
   * saf/cpoc/953c883cde33b2e21d722eb661d26375/测试文件模板-通用.csv
   */
  fileUrl?: string;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * anti_fraud_v2
   */
  serviceCode?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * 注册风险
   */
  serviceName?: string;
  /**
   * @remarks
   * The scenario.
   * 
   * @example
   * INTERNET
   */
  tab?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * er-log-s3
   */
  taskName?: string;
  /**
   * @remarks
   * The access type.
   * 
   * @example
   * SAF_CONSOLE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dateFormat: 'DateFormat',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      lang: 'Lang',
      regId: 'RegId',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
      tab: 'Tab',
      taskName: 'TaskName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateFormat: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUrl: 'string',
      lang: 'string',
      regId: 'string',
      serviceCode: 'string',
      serviceName: 'string',
      tab: 'string',
      taskName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


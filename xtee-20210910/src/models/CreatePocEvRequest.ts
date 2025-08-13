// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePocEvRequest extends $dara.Model {
  /**
   * @remarks
   * Date format type
   * 
   * @example
   * yyyyMMdd
   */
  dateFormat?: string;
  /**
   * @remarks
   * File name.
   * > The file name must end with txt or sql. For example, test.txt, test.sql.
   * 
   * @example
   * test.csv
   */
  fileName?: string;
  /**
   * @remarks
   * File type
   * 
   * @example
   * CSV
   */
  fileType?: string;
  /**
   * @remarks
   * File URL.
   * 
   * @example
   * saf/cpoc/953c883cde33b2e21d722eb661d26375/测试文件模板-通用.csv
   */
  fileUrl?: string;
  /**
   * @remarks
   * Sets the language type for requests and received messages, with a default value of **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Service code.
   * 
   * @example
   * anti_fraud_v2
   */
  serviceCode?: string;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * 注册风险
   */
  serviceName?: string;
  /**
   * @remarks
   * Scenario.
   * 
   * @example
   * INTERNET
   */
  tab?: string;
  /**
   * @remarks
   * Task name.
   * 
   * @example
   * er-log-s3
   */
  taskName?: string;
  /**
   * @remarks
   * Access type.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizeReportConfigDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The language type. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The report ID.\\
   * The ReportId returned by calling the [DescribeCustomizeReportList](https://help.aliyun.com/document_detail/271655.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 619031
   */
  reportId?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 202.104.XXX.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      reportId: 'ReportId',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      reportId: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


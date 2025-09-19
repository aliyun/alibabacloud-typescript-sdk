// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizeReportConfigDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the report.\\
   * You can call the [DescribeCustomizeReportList](https://help.aliyun.com/document_detail/271655.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 619031
   */
  reportId?: number;
  /**
   * @remarks
   * The source IP address of the request.
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


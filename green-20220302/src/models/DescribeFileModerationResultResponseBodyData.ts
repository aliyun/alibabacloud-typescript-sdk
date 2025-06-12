// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeFileModerationResultResponseBodyDataPageResult } from "./DescribeFileModerationResultResponseBodyDataPageResult";
import { DescribeFileModerationResultResponseBodyDataPageSummary } from "./DescribeFileModerationResultResponseBodyDataPageSummary";


export class DescribeFileModerationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * Optional. The document type.
   * 
   * @example
   * doc
   */
  docType?: string;
  /**
   * @remarks
   * An array that consists of the moderation results.
   */
  pageResult?: DescribeFileModerationResultResponseBodyDataPageResult[];
  /**
   * @remarks
   * Summary of results
   */
  pageSummary?: DescribeFileModerationResultResponseBodyDataPageSummary;
  /**
   * @remarks
   * Risk Level
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The URL of the moderated object.
   * 
   * @example
   * https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.pdf
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      docType: 'DocType',
      pageResult: 'PageResult',
      pageSummary: 'PageSummary',
      riskLevel: 'RiskLevel',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      docType: 'string',
      pageResult: { 'type': 'array', 'itemType': DescribeFileModerationResultResponseBodyDataPageResult },
      pageSummary: DescribeFileModerationResultResponseBodyDataPageSummary,
      riskLevel: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pageResult)) {
      $dara.Model.validateArray(this.pageResult);
    }
    if(this.pageSummary && typeof (this.pageSummary as any).validate === 'function') {
      (this.pageSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The code of the file type.
   * 
   * @example
   * 1
   */
  fileCategoryCode?: number;
  /**
   * @remarks
   * The ID of the instance to which the OSS object belongs.
   * 
   * > You can call the **DescribeInstances** operation to query the instance ID.
   * 
   * @example
   * ins-2222
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
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
   * The end time of the last scan. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  lastScanTimeEnd?: number;
  /**
   * @remarks
   * The start time of the last scan. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1536751124000
   */
  lastScanTimeStart?: number;
  /**
   * @remarks
   * When you query data by page, use the `Marker` parameter to query the data that follows the `Marker` value.
   * 
   * @example
   * 1754786235714378752
   */
  marker?: number;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The sensitivity level of the OSS object. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that the OSS object hits.
   * 
   * > You can call the **DescribeRules** operation to query the ID of the sensitive data detection rule.
   * 
   * @example
   * 1222
   */
  ruleId?: number;
  /**
   * @remarks
   * The region in which the data asset resides.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of the industry-specific rule template.
   * 
   * @example
   * 1
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      fileCategoryCode: 'FileCategoryCode',
      instanceId: 'InstanceId',
      lang: 'Lang',
      lastScanTimeEnd: 'LastScanTimeEnd',
      lastScanTimeStart: 'LastScanTimeStart',
      marker: 'Marker',
      name: 'Name',
      pageSize: 'PageSize',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      serviceRegionId: 'ServiceRegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      fileCategoryCode: 'number',
      instanceId: 'string',
      lang: 'string',
      lastScanTimeEnd: 'number',
      lastScanTimeStart: 'number',
      marker: 'number',
      name: 'string',
      pageSize: 'number',
      riskLevelId: 'number',
      ruleId: 'number',
      serviceRegionId: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


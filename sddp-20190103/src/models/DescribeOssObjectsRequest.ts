// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The code of the file category.
   * 
   * @example
   * 1
   */
  fileCategoryCode?: number;
  /**
   * @remarks
   * The ID of the asset instance to which the OSS object belongs.
   * 
   * > To query the list of authorized OSS objects by the ID of the asset instance, call the **DescribeInstances** operation to obtain the instance ID.
   * 
   * @example
   * ins-2222
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
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
   * The position where the query starts. To retrieve the next page of results, set this parameter to the value of `NextMarker` from the previous response.
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
   * The maximum number of entries to return on each page.
   * 
   * @example
   * 12
   */
  pageSize?: number;
  /**
   * @remarks
   * The risk level ID of the OSS object. Valid values:
   * 
   * - **1**: N/A. No sensitive data is detected.
   * 
   * - **2**: S1. Level 1 sensitive data.
   * 
   * - **3**: S2. Level 2 sensitive data.
   * 
   * - **4**: S3. Level 3 sensitive data.
   * 
   * - **5**: S4. Level 4 sensitive data.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that the OSS object matches.
   * 
   * > To query the list of authorized OSS objects by the ID of a matched sensitive data detection rule, call the **DescribeRules** operation to obtain the rule ID.
   * 
   * @example
   * 1222
   */
  ruleId?: number;
  /**
   * @remarks
   * The region of the asset.
   * 
   * @example
   * cn-hangzhou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of the industry-specific template.
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


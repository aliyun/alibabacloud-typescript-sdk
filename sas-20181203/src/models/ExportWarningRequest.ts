// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportWarningRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the baseline issue is handled. Valid values:
   * 
   * - **Y**: The issue is handled.
   * - **N**: The issue is not handled.
   * 
   * @example
   * N
   */
  dealed?: string;
  /**
   * @remarks
   * The type of the export task. Set the value to **hc_check_warning**, which indicates exporting baseline check results.
   * 
   * @example
   * hc_check_warning
   */
  exportType?: string;
  /**
   * @remarks
   * The ID of the server group.
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to obtain the ID of the server group.
   * 
   * @example
   * 13007754
   */
  groupId?: number;
  /**
   * @remarks
   * Specifies the export method for weak password baseline check results. Valid values:
   * 
   * - **0**: Weak passwords are masked before export.
   * - **1**: Weak passwords are exported in plaintext.
   * 
   * @example
   * 0
   */
  isCleartextPwd?: number;
  /**
   * @remarks
   * Specifies whether to export the baseline check results in summary mode. Valid values:
   * 
   * - **0**: The results are not exported in summary mode.
   * - **1**: The results are exported in summary mode.
   * 
   * @example
   * 1
   */
  isSummaryExport?: number;
  /**
   * @remarks
   * Specifies the language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The IDs of the risk items in the baseline check results. Separate multiple risk item IDs with commas (,).
   * 
   * @example
   * 123,124
   */
  riskIds?: string;
  /**
   * @remarks
   * The risk levels of the baselines. Separate multiple risk levels with commas (,). Valid values:
   * 
   * - **high**: High
   * - **medium**: Medium
   * - **low**: Low
   * 
   * @example
   * high,medium
   */
  riskLevels?: string;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Alibaba Cloud Standard - Windows 2016/2019  Security Baseline
   */
  riskName?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 192.0.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The statuses of the risk items in the baseline check results. Separate multiple status values with commas (,). Valid values:
   * 
   * - **3**: Passed
   * - **1**: Failed
   * 
   * @example
   * 1,3
   */
  statusList?: string;
  /**
   * @remarks
   * The ID of the baseline check policy.
   * 
   * @example
   * 12
   */
  strategyId?: number;
  /**
   * @remarks
   * Specifies the baseline subtypes to which the baseline check results to be exported belong. Separate multiple subtypes with commas (,).
   * 
   * > The value is the **TypeName** field under the **SubTypes** field returned by the [DescribeRiskType](~~DescribeRiskType~~) operation.
   * 
   * @example
   * hc_middleware_ack_master
   */
  subTypeNames?: string;
  /**
   * @remarks
   * Specifies the baseline type to which the baseline check results to be exported belong.
   * > The value is the **TypeName** field returned by the [DescribeRiskType](~~DescribeRiskType~~) operation. If both **TypeName** and **TypeNames** are specified, only **TypeName** takes effect.
   * 
   * @example
   * hc_container
   */
  typeName?: string;
  /**
   * @remarks
   * Specifies the baseline types to which the baseline check results to be exported belong. Separate multiple types with commas (,).
   * 
   * > The value is the **TypeName** field returned by the [DescribeRiskType](~~DescribeRiskType~~) operation. If both **TypeName** and **TypeNames** are specified, only **TypeName** takes effect.
   * 
   * @example
   * hc_container,cis
   */
  typeNames?: string;
  /**
   * @remarks
   * The UUIDs of the server assets for which you want to export the baseline check results. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * inet-7c676676-06fa-442e-90fb-b802e****,inet-7c676676-06fa-442e-90fb-b****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      dealed: 'Dealed',
      exportType: 'ExportType',
      groupId: 'GroupId',
      isCleartextPwd: 'IsCleartextPwd',
      isSummaryExport: 'IsSummaryExport',
      lang: 'Lang',
      riskIds: 'RiskIds',
      riskLevels: 'RiskLevels',
      riskName: 'RiskName',
      sourceIp: 'SourceIp',
      statusList: 'StatusList',
      strategyId: 'StrategyId',
      subTypeNames: 'SubTypeNames',
      typeName: 'TypeName',
      typeNames: 'TypeNames',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dealed: 'string',
      exportType: 'string',
      groupId: 'number',
      isCleartextPwd: 'number',
      isSummaryExport: 'number',
      lang: 'string',
      riskIds: 'string',
      riskLevels: 'string',
      riskName: 'string',
      sourceIp: 'string',
      statusList: 'string',
      strategyId: 'number',
      subTypeNames: 'string',
      typeName: 'string',
      typeNames: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


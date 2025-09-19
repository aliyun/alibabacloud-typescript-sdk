// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportWarningRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the baseline risks are handled. Valid values:
   * 
   * *   **Y**: yes
   * *   **N**: no
   * 
   * @example
   * N
   */
  dealed?: string;
  /**
   * @remarks
   * The type of the export task. Set the value to **hc_check_warning**, which indicates tasks to export baseline check results.
   * 
   * @example
   * hc_check_warning
   */
  exportType?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * >  You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the IDs of server groups.
   * 
   * @example
   * 13007754
   */
  groupId?: number;
  /**
   * @remarks
   * The export method of the results for the weak password baseline check. Valid values:
   * 
   * *   **0**: exports the check results after it is masked.
   * *   **1**: exports the check results in plaintext.
   * 
   * @example
   * 0
   */
  isCleartextPwd?: number;
  /**
   * @remarks
   * Specifies whether the baseline check results are aggregated and exported. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  isSummaryExport?: number;
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
   * The ID of the risk item in the baseline check results. Separate multiple IDs with commas (,).
   * 
   * @example
   * 123,124
   */
  riskIds?: string;
  /**
   * @remarks
   * The severity of the baseline check item. Separate multiple severities with commas (,). Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
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
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The status of the check item in the baseline check results. Separate multiple statuses with commas (,). Valid values:
   * 
   * *   **3**: passed
   * *   **1**: failed
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
   * The subtypes of the baselines based on which baseline checks are performed. Separate multiple subtypes with commas (,).
   * 
   * > You must set the value of this parameter to the value of the **TypeName** parameter that is contained in the **SubTypes** parameter. You can call the [DescribeRiskType](~~DescribeRiskType~~) operation to obtain the value of the TypeName parameter.
   * 
   * @example
   * hc_middleware_ack_master
   */
  subTypeNames?: string;
  /**
   * @remarks
   * The type of the baseline based on which baseline checks are performed.
   * 
   * > You must set the value of this parameter to the value of the **TypeName** parameter that is returned by calling the [DescribeRiskType](~~DescribeRiskType~~) operation. If both the **TypeName** and **TypeNames** parameters are specified, only the **TypeName** parameter takes effect.
   * 
   * @example
   * hc_container
   */
  typeName?: string;
  /**
   * @remarks
   * The types of the baselines based on which baseline checks are performed. Separate multiple types with commas (,).
   * 
   * > You must set the value of this parameter to the value of the **TypeName** parameter that is returned by calling the [DescribeRiskType](~~DescribeRiskType~~) operation. If both the **TypeName** and **TypeNames** parameters are specified, only the **TypeName** parameter takes effect.
   * 
   * @example
   * hc_container,cis
   */
  typeNames?: string;
  /**
   * @remarks
   * The UUID of the server whose baseline check results you want to export. Separate multiple UUIDs with commas (,).
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


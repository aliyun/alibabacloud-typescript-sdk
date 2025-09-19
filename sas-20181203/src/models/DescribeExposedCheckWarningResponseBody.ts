// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExposedCheckWarningResponseBodyWarningList extends $dara.Model {
  /**
   * @remarks
   * The ID of the baseline.
   * 
   * >  You can call the [DescribeCheckWarningSummary](https://help.aliyun.com/document_detail/116179.html) operation to query the IDs of baselines.
   * 
   * @example
   * 107
   */
  riskId?: number;
  /**
   * @remarks
   * The name of the baseline.
   * 
   * @example
   * Weak password-Redis DB login weak password baseline
   */
  riskName?: string;
  /**
   * @remarks
   * The display name of the baseline sub type.
   * 
   * @example
   * Redis DB login weak password baseline
   */
  subTypeAlias?: string;
  /**
   * @remarks
   * The display name of the baseline type.
   * 
   * @example
   * Weak password
   */
  typeAlias?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 1d35b031-ee4e-4e53-8b53-465ab712****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      riskId: 'RiskId',
      riskName: 'RiskName',
      subTypeAlias: 'SubTypeAlias',
      typeAlias: 'TypeAlias',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskId: 'number',
      riskName: 'string',
      subTypeAlias: 'string',
      typeAlias: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExposedCheckWarningResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6D9CDB47-6191-4415-BE63-7E8B12CD****
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the baseline risk items of the exposed server.
   */
  warningList?: DescribeExposedCheckWarningResponseBodyWarningList[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      requestId: 'RequestId',
      warningList: 'WarningList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      requestId: 'string',
      warningList: { 'type': 'array', 'itemType': DescribeExposedCheckWarningResponseBodyWarningList },
    };
  }

  validate() {
    if(Array.isArray(this.warningList)) {
      $dara.Model.validateArray(this.warningList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


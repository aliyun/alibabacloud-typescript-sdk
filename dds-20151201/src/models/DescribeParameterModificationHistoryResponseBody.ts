// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterModificationHistoryResponseBodyHistoricalParametersHistoricalParameter extends $dara.Model {
  /**
   * @remarks
   * The time when the parameter was modified. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-03-12T07:58:24Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The parameter value after modification.
   * 
   * @example
   * 200
   */
  newParameterValue?: string;
  /**
   * @remarks
   * The parameter value before modification.
   * 
   * @example
   * 100
   */
  oldParameterValue?: string;
  /**
   * @remarks
   * The name of the modified parameter.
   * 
   * @example
   * operationProfiling.slowOpThresholdMs
   */
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      newParameterValue: 'NewParameterValue',
      oldParameterValue: 'OldParameterValue',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'string',
      newParameterValue: 'string',
      oldParameterValue: 'string',
      parameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoryResponseBodyHistoricalParameters extends $dara.Model {
  historicalParameter?: DescribeParameterModificationHistoryResponseBodyHistoricalParametersHistoricalParameter[];
  static names(): { [key: string]: string } {
    return {
      historicalParameter: 'HistoricalParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historicalParameter: { 'type': 'array', 'itemType': DescribeParameterModificationHistoryResponseBodyHistoricalParametersHistoricalParameter },
    };
  }

  validate() {
    if(Array.isArray(this.historicalParameter)) {
      $dara.Model.validateArray(this.historicalParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterModificationHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the parameter modification records.
   */
  historicalParameters?: DescribeParameterModificationHistoryResponseBodyHistoricalParameters;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B1BB6E0E-B4EF-4145-81FA-A07719860248
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      historicalParameters: 'HistoricalParameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      historicalParameters: DescribeParameterModificationHistoryResponseBodyHistoricalParameters,
      requestId: 'string',
    };
  }

  validate() {
    if(this.historicalParameters && typeof (this.historicalParameters as any).validate === 'function') {
      (this.historicalParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


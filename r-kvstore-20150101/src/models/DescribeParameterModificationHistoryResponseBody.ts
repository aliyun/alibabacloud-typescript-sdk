// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterModificationHistoryResponseBodyHistoricalParametersHistoricalParameter extends $dara.Model {
  /**
   * @remarks
   * The time when the parameter was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-05T09:56:10Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The parameter value after modification.
   * 
   * @example
   * 0
   */
  newParameterValue?: string;
  /**
   * @remarks
   * The parameter value before modification.
   * 
   * @example
   * -2
   */
  oldParameterValue?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * script_check_enable
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
   * The modification records of the parameters.
   */
  historicalParameters?: DescribeParameterModificationHistoryResponseBodyHistoricalParameters;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 963C20F0-7CE1-4591-AAF3-6F3CD1CE****
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


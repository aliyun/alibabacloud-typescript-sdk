// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterModificationHistoryResponseBodyHistoricalParametersHistoricalParameter extends $dara.Model {
  modifyTime?: string;
  newParameterValue?: string;
  oldParameterValue?: string;
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


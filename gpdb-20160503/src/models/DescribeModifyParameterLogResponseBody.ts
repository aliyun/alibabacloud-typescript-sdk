// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModifyParameterLogResponseBodyChangelogs extends $dara.Model {
  /**
   * @remarks
   * The effective time.
   * 
   * @example
   * 2023-01-03T17:00:00Z
   */
  effectTime?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * testkey
   */
  parameterName?: string;
  /**
   * @remarks
   * Indicates whether the modification takes effect.
   * 
   * @example
   * true
   */
  parameterValid?: string;
  /**
   * @remarks
   * The original value of the parameter.
   * 
   * @example
   * 100
   */
  parameterValueAfter?: string;
  /**
   * @remarks
   * The new value of the parameter.
   * 
   * @example
   * 200
   */
  parameterValueBefore?: string;
  static names(): { [key: string]: string } {
    return {
      effectTime: 'EffectTime',
      parameterName: 'ParameterName',
      parameterValid: 'ParameterValid',
      parameterValueAfter: 'ParameterValueAfter',
      parameterValueBefore: 'ParameterValueBefore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectTime: 'string',
      parameterName: 'string',
      parameterValid: 'string',
      parameterValueAfter: 'string',
      parameterValueBefore: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModifyParameterLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried parameter modification logs.
   */
  changelogs?: DescribeModifyParameterLogResponseBodyChangelogs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FA1F1D1-50A6-4F60-9A78-5752F2076A53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changelogs: 'Changelogs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changelogs: { 'type': 'array', 'itemType': DescribeModifyParameterLogResponseBodyChangelogs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changelogs)) {
      $dara.Model.validateArray(this.changelogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


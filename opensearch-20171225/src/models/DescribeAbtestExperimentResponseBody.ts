// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeABTestExperimentResponseBodyResultParams extends $dara.Model {
  /**
   * @remarks
   * The name of the rough sort policy.
   * 
   * @example
   * default
   */
  firstFormulaName?: string;
  static names(): { [key: string]: string } {
    return {
      firstFormulaName: 'first_formula_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstFormulaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestExperimentResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the test was created.
   * 
   * @example
   * 1588842080
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test.
   * 
   * @example
   * 12888
   */
  id?: string;
  /**
   * @remarks
   * The name of the test.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * The status of the test. Valid values:
   * 
   * *   true: in effect
   * *   false: not in effect
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The parameters of the test.
   */
  params?: DescribeABTestExperimentResponseBodyResultParams;
  /**
   * @remarks
   * The percentage of traffic that is routed to the test.
   * 
   * @example
   * 30
   */
  traffic?: number;
  /**
   * @remarks
   * The time when the test was last modified.
   * 
   * @example
   * 1588842080
   */
  updated?: number;
  static names(): { [key: string]: string } {
    return {
      created: 'created',
      id: 'id',
      name: 'name',
      online: 'online',
      params: 'params',
      traffic: 'traffic',
      updated: 'updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      created: 'number',
      id: 'string',
      name: 'string',
      online: 'boolean',
      params: DescribeABTestExperimentResponseBodyResultParams,
      traffic: 'number',
      updated: 'number',
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeABTestExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the test.
   */
  result?: DescribeABTestExperimentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeABTestExperimentResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


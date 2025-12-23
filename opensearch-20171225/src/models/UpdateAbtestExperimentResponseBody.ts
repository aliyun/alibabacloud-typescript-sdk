// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateABTestExperimentResponseBodyResult extends $dara.Model {
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
   * The test ID.
   * 
   * @example
   * 12888
   */
  id?: string;
  /**
   * @remarks
   * The alias of the test.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the test is in effect. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The test parameters.
   * 
   * @example
   * {}
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The percentage of traffic that is routed to the test. Valid values: [0,100]
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
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      traffic: 'number',
      updated: 'number',
    };
  }

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateABTestExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the test.
   */
  result?: UpdateABTestExperimentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateABTestExperimentResponseBodyResult,
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


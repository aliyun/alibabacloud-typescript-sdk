// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateABTestExperimentResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the experiment was created.
   * 
   * @example
   * 1588842080
   */
  created?: number;
  /**
   * @remarks
   * The ID of the experiment.
   * 
   * @example
   * 12888
   */
  id?: string;
  /**
   * @remarks
   * The name of the experiment.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * The status of the experiment.
   * 
   * - true: The experiment is online.
   * 
   * - false: The experiment is offline.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The parameters of the experiment.
   * 
   * @example
   * {}
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The percentage of traffic allocated to the experiment. Valid values: 0 to 100.
   * 
   * @example
   * 30
   */
  traffic?: number;
  /**
   * @remarks
   * The time when the experiment was last modified.
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
   * The ID of the request.
   * 
   * @example
   * D77D0DAF-790D-F5F5-A9C0-133738165014
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the experiment.
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


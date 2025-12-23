// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListABTestExperimentsResponseBodyResult extends $dara.Model {
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
   * The experiment ID.
   * 
   * @example
   * 12888
   */
  id?: string;
  /**
   * @remarks
   * The group alias.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the experiment is in effect. Valid values:
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
   * The experiment parameters.
   * 
   * @example
   * 1
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The percentage of traffic that is routed to the experiment.
   * 
   * Valid values: [0,100]
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

export class ListABTestExperimentsResponseBody extends $dara.Model {
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
   * The experiment details.\\
   * For more information, see [ABTestExperiment](https://help.aliyun.com/document_detail/173617.html).
   */
  result?: ListABTestExperimentsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListABTestExperimentsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


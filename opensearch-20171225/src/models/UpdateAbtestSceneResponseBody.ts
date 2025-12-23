// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateABTestSceneResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the test scenario was created.
   * 
   * @example
   * 1596527691
   */
  created?: number;
  /**
   * @remarks
   * The ID of the test scenario.
   * 
   * @example
   * 20614
   */
  id?: string;
  /**
   * @remarks
   * The name of the test scenario.
   * 
   * @example
   * kevintest22
   */
  name?: string;
  /**
   * @remarks
   * The status of the test. Valid values:
   * 
   * *   true: The test is started.
   * *   false: The test is stopped.
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * The parameters of the A/B test.
   * 
   * @example
   * {}
   */
  params?: { [key: string]: any };
  /**
   * @remarks
   * The percentage of traffic that is allocated to the A/B test. Valid values: 0 to 100.
   * 
   * @example
   * 111
   */
  traffic?: number;
  /**
   * @remarks
   * The time when the test scenario was last modified.
   * 
   * @example
   * 1596527691
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

export class UpdateABTestSceneResponseBody extends $dara.Model {
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
   * The details of the test scenario. For more information, see [ABTestScene](https://help.aliyun.com/document_detail/173618.html).
   * 
   * @example
   * {}
   */
  result?: UpdateABTestSceneResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateABTestSceneResponseBodyResult,
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


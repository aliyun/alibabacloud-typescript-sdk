// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateResourcePlanWithFlinkConfAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The Flink configuration that is used to generate a resource plan.
   */
  body?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


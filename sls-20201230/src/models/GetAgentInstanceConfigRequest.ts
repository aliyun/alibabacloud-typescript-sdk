// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The owner of the process-level configuration.
   */
  attributes?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


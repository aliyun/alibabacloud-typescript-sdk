// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationSpecRequestInstanceSpec extends $dara.Model {
  configuration?: { [key: string]: any };
  /**
   * @example
   * rm-2ze8f4ah378a*****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
    };
  }

  validate() {
    if(this.configuration) {
      $dara.Model.validateMap(this.configuration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


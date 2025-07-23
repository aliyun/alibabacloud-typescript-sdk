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

export class ModifyApplicationSpecRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 02S7UU41WKJL7ERR
   */
  applicationId?: string;
  instanceSpec?: ModifyApplicationSpecRequestInstanceSpec[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceSpec: 'InstanceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceSpec: { 'type': 'array', 'itemType': ModifyApplicationSpecRequestInstanceSpec },
    };
  }

  validate() {
    if(Array.isArray(this.instanceSpec)) {
      $dara.Model.validateArray(this.instanceSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


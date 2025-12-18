// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCfwInstanceRequestUpdateList extends $dara.Model {
  /**
   * @example
   * Sdl
   */
  code?: string;
  /**
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCfwInstanceRequest extends $dara.Model {
  /**
   * @example
   * cfw_elasticity_public_cn-zsk39m******
   */
  instanceId?: string;
  updateList?: ModifyCfwInstanceRequestUpdateList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      updateList: 'UpdateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      updateList: { 'type': 'array', 'itemType': ModifyCfwInstanceRequestUpdateList },
    };
  }

  validate() {
    if(Array.isArray(this.updateList)) {
      $dara.Model.validateArray(this.updateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


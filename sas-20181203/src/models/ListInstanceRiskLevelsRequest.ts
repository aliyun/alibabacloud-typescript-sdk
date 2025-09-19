// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRiskLevelsRequestInstanceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-m5efigezp50l2cmb****
   */
  instanceId?: string;
  /**
   * @remarks
   * The serial number of the instance.
   * 
   * @example
   * f2d6e901-1004-4ca8-9dae-53ec04a9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRiskLevelsRequest extends $dara.Model {
  /**
   * @remarks
   * The instances.
   */
  instanceList?: ListInstanceRiskLevelsRequestInstanceList[];
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': ListInstanceRiskLevelsRequestInstanceList },
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


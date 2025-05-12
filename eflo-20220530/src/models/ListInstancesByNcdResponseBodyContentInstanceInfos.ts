// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesByNcdResponseBodyContentInstanceInfos extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * lni-1235****
   */
  instanceId?: string;
  /**
   * @remarks
   * network communication distance
   * 
   * @example
   * 2
   */
  ncd?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ncd: 'Ncd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ncd: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


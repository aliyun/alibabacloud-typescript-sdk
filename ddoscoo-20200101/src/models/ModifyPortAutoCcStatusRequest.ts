// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPortAutoCcStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  switch?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mode: 'Mode',
      switch: 'Switch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mode: 'string',
      switch: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClassificationTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 169****
   */
  instanceId?: number;
  /**
   * @example
   * 23***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


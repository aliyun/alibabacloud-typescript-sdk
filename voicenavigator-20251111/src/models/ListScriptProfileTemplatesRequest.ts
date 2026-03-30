// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptProfileTemplatesRequest extends $dara.Model {
  /**
   * @example
   * c28fc549-d88f-4f6e-85ad-a0806e5e39c0
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


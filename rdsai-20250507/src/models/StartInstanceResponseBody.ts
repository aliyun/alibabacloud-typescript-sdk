// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


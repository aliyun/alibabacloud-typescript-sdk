// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstancePropertiesRequest extends $dara.Model {
  /**
   * @example
   * cpn-2ofr9kf41apy3****-014
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


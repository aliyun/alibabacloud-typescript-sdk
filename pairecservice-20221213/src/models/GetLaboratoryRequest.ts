// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLaboratoryRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can obtain this ID by calling the ListInstances operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-test1
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateParamRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can retrieve this ID by calling the ListInstances API.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The parameter\\"s value.
   * 
   * @example
   * house
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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


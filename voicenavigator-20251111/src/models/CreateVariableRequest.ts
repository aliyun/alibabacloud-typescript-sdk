// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVariableRequest extends $dara.Model {
  description?: string;
  displayName?: string;
  /**
   * @example
   * 5daac920-d6c1-429f-a95f-2a798f5255b5
   */
  instanceId?: string;
  /**
   * @example
   * userType
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


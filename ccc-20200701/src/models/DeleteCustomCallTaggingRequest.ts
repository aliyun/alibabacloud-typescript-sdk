// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomCallTaggingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1312121****
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


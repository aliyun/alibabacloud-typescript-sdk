// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  concurrency?: number;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12f407b22cbe4890ac595f09985848d5
   */
  instanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      description: 'string',
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


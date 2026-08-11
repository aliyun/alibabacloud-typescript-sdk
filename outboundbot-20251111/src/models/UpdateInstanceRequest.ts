// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of concurrent connections.
   * 
   * @example
   * 20
   */
  concurrency?: number;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * Intelligent outbound call instance for telemarketing scenarios
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * Intelligent outbound call instance
   */
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


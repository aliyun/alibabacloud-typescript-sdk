// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of concurrent calls.
   * 
   * @example
   * 10
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
   * The instance name.
   * 
   * @example
   * Intelligent outbound call instance
   */
  name?: string;
  /**
   * @remarks
   * The service mode.
   * 
   * @example
   * STANDARD
   */
  serviceMode?: string;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      description: 'Description',
      name: 'Name',
      serviceMode: 'ServiceMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      description: 'string',
      name: 'string',
      serviceMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


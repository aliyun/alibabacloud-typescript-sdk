// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScriptRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  concurrency?: number;
  description?: string;
  /**
   * @example
   * 36e9a4cd-a821-4f78-86fa-a9a4aefeea2e
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * BEEBOT
   */
  nluEngine?: string;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      nluEngine: 'NluEngine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      nluEngine: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePipelinesRequestBody } from "./CreatePipelinesRequestBody";


export class CreatePipelinesRequest extends $dara.Model {
  /**
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  body?: CreatePipelinesRequestBody[];
  /**
   * @example
   * false
   */
  trigger?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      body: 'body',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      body: { 'type': 'array', 'itemType': CreatePipelinesRequestBody },
      trigger: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


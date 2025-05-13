// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineIdsRequest extends $dara.Model {
  /**
   * @example
   * {     "userName":"elastic",     "password":"xxxxxx" }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


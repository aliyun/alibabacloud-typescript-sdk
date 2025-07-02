// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class InvokeFunctionRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters of function invocation.
   * 
   * @example
   * event
   */
  body?: Readable;
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'Readable',
      qualifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


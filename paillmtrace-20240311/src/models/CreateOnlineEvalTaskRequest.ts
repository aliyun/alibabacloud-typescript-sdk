// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateOnlineEvalTaskRequestBody } from "./CreateOnlineEvalTaskRequestBody";


export class CreateOnlineEvalTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The request data.
   */
  body?: CreateOnlineEvalTaskRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateOnlineEvalTaskRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


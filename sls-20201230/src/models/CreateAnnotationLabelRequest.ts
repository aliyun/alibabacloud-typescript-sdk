// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MLLabelParam } from "./MllabelParam";


export class CreateAnnotationLabelRequest extends $dara.Model {
  /**
   * @remarks
   * The data structure of the request.
   */
  body?: MLLabelParam;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: MLLabelParam,
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


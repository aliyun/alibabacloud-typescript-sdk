// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class DetectImageLabelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of labels detected.
   */
  labels?: Label[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 91AC8C98-0F36-49D2-8290-742E24DF1F69
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': Label },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


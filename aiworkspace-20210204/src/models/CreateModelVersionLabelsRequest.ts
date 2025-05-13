// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class CreateModelVersionLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The tags.
   */
  labels?: Label[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': Label },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddImageLabelsRequestLabels } from "./AddImageLabelsRequestLabels";


export class AddImageLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of image tags.
   * 
   * This parameter is required.
   */
  labels?: AddImageLabelsRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': AddImageLabelsRequestLabels },
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


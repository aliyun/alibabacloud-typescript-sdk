// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LabelInfo } from "./LabelInfo";


export class SetExperimentLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The tags.
   */
  labels?: LabelInfo[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': LabelInfo },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateInstanceLabelsRequestLabels } from "./UpdateInstanceLabelsRequestLabels";


export class UpdateInstanceLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The tags that you want to update.
   * 
   * This parameter is required.
   */
  labels?: UpdateInstanceLabelsRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': UpdateInstanceLabelsRequestLabels },
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


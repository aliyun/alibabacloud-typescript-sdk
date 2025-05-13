// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { RunParam } from "./RunParam";


export class UpdateRunRequest extends $dara.Model {
  /**
   * @remarks
   * The labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * The run name. The name must meet the following requirements:
   * 
   * *   The name must start with a letter.
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be 1 to 63 characters in length.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The parameters.
   */
  params?: RunParam[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      name: 'Name',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': Label },
      name: 'string',
      params: { 'type': 'array', 'itemType': RunParam },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


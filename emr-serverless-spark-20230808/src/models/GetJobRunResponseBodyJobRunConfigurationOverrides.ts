// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Configuration } from "./Configuration";


export class GetJobRunResponseBodyJobRunConfigurationOverrides extends $dara.Model {
  /**
   * @remarks
   * The configurations.
   */
  configurations?: Configuration[];
  static names(): { [key: string]: string } {
    return {
      configurations: 'configurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configurations: { 'type': 'array', 'itemType': Configuration },
    };
  }

  validate() {
    if(Array.isArray(this.configurations)) {
      $dara.Model.validateArray(this.configurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


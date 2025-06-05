// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupsResponseBodyContainerGroupsInitContainersSecurityContextCapability extends $dara.Model {
  /**
   * @remarks
   * The permissions specific to the processes in the container.
   */
  adds?: string[];
  static names(): { [key: string]: string } {
    return {
      adds: 'Adds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.adds)) {
      $dara.Model.validateArray(this.adds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


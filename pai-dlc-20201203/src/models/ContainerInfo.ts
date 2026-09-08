// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContainerInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the main container.
   * 
   * @example
   * pytorch
   */
  mainContainer?: string;
  /**
   * @remarks
   * The list of sidecar container names.
   */
  sidecarContainers?: string[];
  static names(): { [key: string]: string } {
    return {
      mainContainer: 'MainContainer',
      sidecarContainers: 'SidecarContainers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainContainer: 'string',
      sidecarContainers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sidecarContainers)) {
      $dara.Model.validateArray(this.sidecarContainers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


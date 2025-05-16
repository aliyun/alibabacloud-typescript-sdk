// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequestAdditionalPackages extends $dara.Model {
  /**
   * @remarks
   * The name of the software that you want to install in the cluster.
   * 
   * @example
   * mpich
   */
  name?: string;
  /**
   * @remarks
   * The version of the software that you want to install in the cluster.
   * 
   * @example
   * 4.0.3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


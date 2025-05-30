// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPackagesResponseBodyDataInstalledPackages extends $dara.Model {
  /**
   * @remarks
   * The time when the package was installed.
   * 
   * @example
   * 2022-09-02T02:30:34Z
   */
  installTime?: number;
  /**
   * @remarks
   * The name of the package.
   * 
   * @example
   * packageB
   */
  name?: string;
  /**
   * @remarks
   * The project to which the package belongs. This parameter is required if the package is installed in the MaxCompute project.
   * 
   * @example
   * projectB
   */
  sourceProject?: string;
  /**
   * @remarks
   * The status of the package.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      installTime: 'installTime',
      name: 'name',
      sourceProject: 'sourceProject',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installTime: 'number',
      name: 'string',
      sourceProject: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPackagesResponseBodyDataCreatedPackages extends $dara.Model {
  /**
   * @remarks
   * The time when the package was created.
   * 
   * @example
   * 2022-08-02T02:30:34Z
   */
  createTime?: number;
  /**
   * @remarks
   * The name of the package.
   * 
   * @example
   * packageA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


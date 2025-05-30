// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePackageRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * {
   * "name": "test_packege", 
   *     "resourceList": { 
   *         "table": [
   *             {
   *                 "name": "table_name",
   *                 "actions": [
   *                     "Describe",
   *                     "Select"
   *                 ]
   *             },
   *             {
   *                 "name": "table_name",
   *                 "actions": [
   *                     "Describe",
   *                     "Select"
   *                 ]
   *             }
   *         ],
   *         "resource": [
   *             {
   *                 "name": "",
   *                 "actions": []
   *             },
   *             {
   *                 "name": "",
   *                 "actions": []
   *             }
   *         ],
   *         "function": [
   *             {
   *                 "name": "",
   *                 "actions": []
   *             },
   *             {
   *                 "name": "",
   *                 "actions": []
   *             }
   *         ]
   *     }
   * }
   */
  body?: string;
  /**
   * @remarks
   * Specifies whether to install the package.
   * 
   * @example
   * false
   */
  isInstall?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      isInstall: 'isInstall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      isInstall: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


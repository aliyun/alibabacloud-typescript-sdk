// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePackageRequest extends $dara.Model {
  /**
   * @remarks
   * The request body parameters.
   * 
   * @example
   * {
   *     "add": {
   *         "allowedProjectList": [
   *             {
   *                 "label": "2",
   *                 "project": "project_name"
   *             }
   *         ],
   *         "resourceList": {
   *             "table": [
   *                 {
   *                     "name": "table_name",
   *                     "actions": [
   *                         "Describe",
   *                         "Select"
   *                     ]
   *                 },
   *                 {
   *                     "name": "table_name",
   *                     "actions": [
   *                         "Describe",
   *                         "Select"
   *                     ]
   *                 }
   *             ],
   *             "resource": [
   *                 {
   *                     "name": "",
   *                     "actions": []
   *                 },
   *                 {
   *                     "name": "",
   *                     "actions": []
   *                 }
   *             ],
   *             "function": [
   *                 {
   *                     "name": "",
   *                     "actions": []
   *                 },
   *                 {
   *                     "name": "",
   *                     "actions": []
   *                 }
   *             ]
   *         }
   *     },
   *     "remove": {
   *         "allowedProjectList": [
   *             {
   *                 "project": "project_name"
   *             },
   *             {
   *                 "project": "project_2"
   *             }
   *         ],
   *         "resourceList": {
   *             "table": [
   *                 {
   *                     "name": "table_name"
   *                 },
   *                 {
   *                     "name": "table_name"
   *                 }
   *             ],
   *             "resource": [
   *                 {
   *                     "name": ""
   *                 },
   *                 {
   *                     "name": ""
   *                 }
   *             ],
   *             "function": [
   *                 {
   *                     "name": ""
   *                 },
   *                 {
   *                     "name": ""
   *                 }
   *             ]
   *         }
   *     }
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


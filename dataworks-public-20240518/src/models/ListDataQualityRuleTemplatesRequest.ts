// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityRuleTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The creation source of the rule template. This parameter is required. Valid values:
   * 
   * - System: system template.
   * - UserDefined: user-defined template.
   * 
   * @example
   * System
   */
  creationSource?: string;
  /**
   * @remarks
   * The category directory where the custom template is stored. Levels are separated by forward slashes (/). Each level name can be up to 1024 characters in length and cannot contain whitespace characters or backslashes.
   * 
   * @example
   * /ods/order_data
   */
  directoryPath?: string;
  /**
   * @remarks
   * The fuzzy match for the template rule name. If the template is a system template, the internationalized name of the system template is fuzzy matched based on the language.
   * 
   * @example
   * Table rows
   */
  name?: string;
  /**
   * @remarks
   * The page size for the paging query. Default value: 10.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number for the paging query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      creationSource: 'CreationSource',
      directoryPath: 'DirectoryPath',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationSource: 'string',
      directoryPath: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


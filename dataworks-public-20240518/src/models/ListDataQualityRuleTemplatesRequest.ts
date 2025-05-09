// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityRuleTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the template. This parameter is required. Valid values:
   * 
   * *   System
   * *   UserDefined
   * 
   * @example
   * System
   */
  creationSource?: string;
  /**
   * @remarks
   * The directory in which the template is stored. Slashes (/) are used to separate directory levels. The name of each directory level can be up to 1,024 characters in length. It cannot contain whitespace characters or slashes (/).
   * 
   * @example
   * /ods/order_data
   */
  directoryPath?: string;
  /**
   * @remarks
   * The name of the template. If you want to query a system template, set this parameter to the name of the system template. Fuzzy match is supported.
   * 
   * @example
   * Table rows
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
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


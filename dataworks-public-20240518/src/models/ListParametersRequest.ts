// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of parameter IDs.
   */
  ids?: number[];
  /**
   * @remarks
   * The list of parameter names.
   */
  names?: string[];
  /**
   * @remarks
   * The account ID of the owner.
   * 
   * @example
   * 123456789
   */
  owner?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the workspace. You can call the ListProjects operation to obtain the workspace ID.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The scope of the parameter. Default value: Project. Other types are not supported.
   * 
   * @example
   * Project
   */
  scope?: string;
  /**
   * @remarks
   * The list of fields by which to sort the results. Supported fields include modification time and creation time. The format is "SortField+SortOrder(Desc/Asc)". You can omit Asc. Valid values:
   * - ModifyTime (Desc/Asc)
   * - CreateTime (Desc/Asc)
   * - Name (Desc/Asc)
   * 
   * @example
   * ModifyTime Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The parameter type. Valid values:
   * - PlainConstant: plaintext constant.
   * - SecretConstant: ciphertext constant.
   * - Variable: variable.
   * 
   * @example
   * PlainConstant
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      names: 'Names',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      scope: 'Scope',
      sortBy: 'SortBy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
      names: { 'type': 'array', 'itemType': 'string' },
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      scope: 'string',
      sortBy: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    if(Array.isArray(this.names)) {
      $dara.Model.validateArray(this.names);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListParametersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of parameter IDs.
   */
  idsShrink?: string;
  /**
   * @remarks
   * A list of parameter names.
   */
  namesShrink?: string;
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
   * The page number. Default: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The workspace ID. Call the ListProjects operation to get the workspace ID.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The scope of the parameter. The default value is Project. Other values are not supported.
   * 
   * @example
   * Project
   */
  scope?: string;
  /**
   * @remarks
   * The field to sort the parameters by. Specify the value in the "FieldName SortOrder" format. The Asc sort order is optional. Supported values are:
   * 
   * - ModifyTime (Desc/Asc)
   * 
   * - CreateTime (Desc/Asc)
   * 
   * - Name (Desc/Asc)
   * 
   * @example
   * ModifyTime Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The type of the parameter. Valid values:
   * 
   * - PlainConstant: A plaintext constant.
   * 
   * - SecretConstant: A secret constant.
   * 
   * - Variable: A variable.
   * 
   * @example
   * PlainConstant
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      idsShrink: 'Ids',
      namesShrink: 'Names',
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
      idsShrink: 'string',
      namesShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


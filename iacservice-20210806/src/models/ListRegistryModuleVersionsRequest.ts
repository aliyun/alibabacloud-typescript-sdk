// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistryModuleVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page in a paged query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The Registry template name.
   * 
   * This parameter is required.
   * 
   * @example
   * ModuleName
   */
  moduleName?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * This parameter is required.
   * 
   * @example
   * MamespaceName
   */
  namespaceName?: string;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * TRkuCaTw/VsEHrnCZgrBA0ftQSEJU/lzo2ei7MJjplg=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      moduleName: 'moduleName',
      namespaceName: 'namespaceName',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      moduleName: 'string',
      namespaceName: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


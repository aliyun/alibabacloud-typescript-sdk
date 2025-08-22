// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistryModuleVersionsRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs-rds
   */
  moduleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * terraform-alicloud-modules
   */
  namespaceName?: string;
  /**
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


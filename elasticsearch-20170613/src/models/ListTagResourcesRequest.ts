// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1d2db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  /**
   * @remarks
   * 1d2db86sca4384811e0b5e8707e\\*\\*\\*\\*\\*\\*
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  page?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ["es-cn-aaa","es-cn-bbb"]
   */
  resourceIds?: string;
  /**
   * @remarks
   * [{"key":"env","value","dev"},{"key":"dev", "value":"IT"}]
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * ["es-cn-aaa","es-cn-bbb"]
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  size?: number;
  /**
   * @remarks
   * The header of the response. This parameter is empty and is for reference only. You cannot force this parameter to be relied on in the program.
   * 
   * >  The return examples does not contain this parameter.
   * 
   * @example
   * [{"key":"env","value","dev"},{"key":"dev",  "value":"IT"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      page: 'Page',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      size: 'Size',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      page: 'number',
      resourceIds: 'string',
      resourceType: 'string',
      size: 'number',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


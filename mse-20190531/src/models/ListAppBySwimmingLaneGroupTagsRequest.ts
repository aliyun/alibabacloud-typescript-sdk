// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppBySwimmingLaneGroupTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to display the results. Valid values: zh and en. zh indicates Chinese, which is the default value. en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the MSE namespace that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The tag based on which you want to list applications.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      groupId: 'GroupId',
      namespace: 'Namespace',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      groupId: 'number',
      namespace: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


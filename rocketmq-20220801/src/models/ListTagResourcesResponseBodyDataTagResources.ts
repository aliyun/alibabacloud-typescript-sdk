// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyDataTagResources extends $dara.Model {
  /**
   * @remarks
   * UID of the resource owner.
   * 
   * @example
   * 1876441048322426
   */
  aliUid?: number;
  /**
   * @remarks
   * Tag category.
   * 
   * @example
   * custom
   */
  category?: string;
  /**
   * @remarks
   * Resource ID.
   * 
   * @example
   * rmq-cn-pe334n08h08
   */
  resourceId?: string;
  /**
   * @remarks
   * Resource type.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * Visibility scope.
   * 
   * @example
   * public
   */
  scope?: string;
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * key
   */
  tagKey?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'aliUid',
      category: 'category',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      scope: 'scope',
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      category: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


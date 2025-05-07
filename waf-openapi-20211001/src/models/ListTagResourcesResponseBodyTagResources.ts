// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * c754d2a4-28f1-46df-b557-9586173a****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. ALIYUN::WAF::DEFENSERESOURCE is returned.
   * 
   * @example
   * ALIYUN::WAF::DEFENSERESOURCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of tag N that is added to the resource.
   * 
   * @example
   * TagKey1
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N that is added to the resource.
   * 
   * @example
   * TayValue1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
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


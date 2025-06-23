// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anti-DDoS Proxy (Chinese Mainland) instance.
   * 
   * @example
   * ddoscoo-cn-zz121ogz****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. The value is fixed as **INSTANCE**, which indicates an Anti-DDoS Proxy instance.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag that is added to the Anti-DDoS Proxy (Chinese Mainland) instance.
   * 
   * @example
   * testvalue
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag that is added to the Anti-DDoS Proxy (Chinese Mainland) instance.
   * 
   * @example
   * testkey
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


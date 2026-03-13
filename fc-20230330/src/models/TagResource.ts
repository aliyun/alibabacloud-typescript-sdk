// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResource extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the resource.
   * 
   * @example
   * acs:fc:cn-shanghai:****:functions/demo
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource type.
   * 
   * The function type in Function Compute 3.0 is ALIYUN::FC::FUNCTION, which is abbreviated as "function".
   * 
   * @example
   * function
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * key1
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


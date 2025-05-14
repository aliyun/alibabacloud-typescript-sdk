// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * i-xxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. For more information, see [Labels](https://help.aliyun.com/document_detail/110425.html).
   * 
   * @example
   * CLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the label.
   * 
   * @example
   * ack.aliyun.com
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the label.
   * 
   * @example
   * c71cf3d796c374bf48644482cb0c3****
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resource_id',
      resourceType: 'resource_type',
      tagKey: 'tag_key',
      tagValue: 'tag_value',
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


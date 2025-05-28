// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to delete all tags.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs, in the JSON format.
   * 
   * This parameter is required.
   * 
   * @example
   * rmq-cn-pe3355cs707
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of resource.
   * 
   * Set this parameter to **instance**. The value of this parameter cannot be changed.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of tags.
   * 
   * @example
   * ["key1", "key2"]
   */
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      regionId: 'regionId',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tagKey: 'tagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


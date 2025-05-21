// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1l20nxxxxxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. A value of cluster indicates an AnalyticDB for MySQL cluster.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * testkey1
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * testvalue1
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


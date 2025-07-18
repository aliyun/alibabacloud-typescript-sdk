// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutesTags extends $dara.Model {
  /**
   * @example
   * 2022-10-23 14:02:56
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  /**
   * @example
   * Custom
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      tagId: 'TagId',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      tagId: 'string',
      tagType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutes extends $dara.Model {
  /**
   * @example
   * dr-ca9fddfac7c6****
   */
  dynamicRouteId?: string;
  tags?: ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutesTags[];
  static names(): { [key: string]: string } {
    return {
      dynamicRouteId: 'DynamicRouteId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteId: 'string',
      tags: { 'type': 'array', 'itemType': ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutesTags },
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

export class ListPrivateAccessTagsForDynamicRouteResponseBody extends $dara.Model {
  dynamicRoutes?: ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutes[];
  /**
   * @example
   * B608C6AE-623D-55C4-9454-601B88AE937E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicRoutes: 'DynamicRoutes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRoutes: { 'type': 'array', 'itemType': ListPrivateAccessTagsForDynamicRouteResponseBodyDynamicRoutes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dynamicRoutes)) {
      $dara.Model.validateArray(this.dynamicRoutes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


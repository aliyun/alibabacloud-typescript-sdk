// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveTagResourcesResponseBodyTagResourcesTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * product
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTagResourcesResponseBodyTagResources extends $dara.Model {
  /**
   * @remarks
   * The resource.
   * 
   * @example
   * example.com
   */
  resourceId?: string;
  /**
   * @remarks
   * The key-value pair of the tag.
   */
  tag?: DescribeLiveTagResourcesResponseBodyTagResourcesTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeLiveTagResourcesResponseBodyTagResourcesTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34AB41F1-04A5-496F-8C8D-634BDBE6A9FB
   */
  requestId?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tagResources?: DescribeLiveTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': DescribeLiveTagResourcesResponseBodyTagResources },
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


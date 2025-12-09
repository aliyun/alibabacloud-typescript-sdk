// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesResponseBodyDataTagResourcesTagResources extends $dara.Model {
  /**
   * @example
   * cas-upload-xgjcng
   */
  resourceId?: string;
  /**
   * @example
   * ALIYUN::CAS::PCACERTIFICATE
   */
  resourceType?: string;
  tagKey?: string;
  /**
   * @example
   * PVDCDC
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

export class ListTagResourcesResponseBodyDataTagResources extends $dara.Model {
  tagResources?: ListTagResourcesResponseBodyDataTagResourcesTagResources[];
  static names(): { [key: string]: string } {
    return {
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyDataTagResourcesTagResources },
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

export class ListTagResourcesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 24262
   */
  nextToken?: string;
  tagResources?: ListTagResourcesResponseBodyDataTagResources;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      tagResources: ListTagResourcesResponseBodyDataTagResources,
    };
  }

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  data?: ListTagResourcesResponseBodyData;
  /**
   * @example
   * 2D69A58F-345C-4FDE-88E4-BF5189484043
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTagResourcesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


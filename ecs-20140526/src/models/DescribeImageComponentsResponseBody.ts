// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageComponentsResponseBodyImageComponentImageComponentSetParametersParameter extends $dara.Model {
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * null
   */
  defaultValue?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * null
   */
  name?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
   * Valid values:
   * 
   * *   String
   * *   Number
   * *   Boolean
   * 
   * @example
   * null
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageComponentsResponseBodyImageComponentImageComponentSetParameters extends $dara.Model {
  parameter?: DescribeImageComponentsResponseBodyImageComponentImageComponentSetParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeImageComponentsResponseBodyImageComponentImageComponentSetParametersParameter },
    };
  }

  validate() {
    if(Array.isArray(this.parameter)) {
      $dara.Model.validateArray(this.parameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageComponentsResponseBodyImageComponentImageComponentSetTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeImageComponentsResponseBodyImageComponentImageComponentSetTags extends $dara.Model {
  tag?: DescribeImageComponentsResponseBodyImageComponentImageComponentSetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeImageComponentsResponseBodyImageComponentImageComponentSetTagsTag },
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

export class DescribeImageComponentsResponseBodyImageComponentImageComponentSet extends $dara.Model {
  /**
   * @remarks
   * The type of the image component.
   * 
   * @example
   * Build
   */
  componentType?: string;
  /**
   * @remarks
   * The version number of the image component.
   * 
   * @example
   * null
   */
  componentVersion?: string;
  /**
   * @remarks
   * The content of the image component.
   * 
   * @example
   * RESTART
   */
  content?: string;
  /**
   * @remarks
   * The time when the image component was created.
   * 
   * @example
   * 2020-11-24T06:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the image component.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the image component.
   * 
   * @example
   * ic-bp67acfmxazb4p****
   */
  imageComponentId?: string;
  /**
   * @remarks
   * The name of the image component.
   * 
   * @example
   * testComponent
   */
  name?: string;
  /**
   * @remarks
   * The type of the image component. Valid values:
   * 
   * *   SELF: the custom component that you created.
   * *   ALIYUN: the system component provided by Alibaba Cloud.
   * 
   * @example
   * SELF
   */
  owner?: string;
  /**
   * @remarks
   * The parameters contained in the image component.
   */
  parameters?: DescribeImageComponentsResponseBodyImageComponentImageComponentSetParameters;
  /**
   * @remarks
   * The ID of the resource group to which the image component belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the operating system supported by the image component.
   * 
   * @example
   * Linux
   */
  systemType?: string;
  /**
   * @remarks
   * The tags of the image component.
   */
  tags?: DescribeImageComponentsResponseBodyImageComponentImageComponentSetTags;
  static names(): { [key: string]: string } {
    return {
      componentType: 'ComponentType',
      componentVersion: 'ComponentVersion',
      content: 'Content',
      creationTime: 'CreationTime',
      description: 'Description',
      imageComponentId: 'ImageComponentId',
      name: 'Name',
      owner: 'Owner',
      parameters: 'Parameters',
      resourceGroupId: 'ResourceGroupId',
      systemType: 'SystemType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      componentVersion: 'string',
      content: 'string',
      creationTime: 'string',
      description: 'string',
      imageComponentId: 'string',
      name: 'string',
      owner: 'string',
      parameters: DescribeImageComponentsResponseBodyImageComponentImageComponentSetParameters,
      resourceGroupId: 'string',
      systemType: 'string',
      tags: DescribeImageComponentsResponseBodyImageComponentImageComponentSetTags,
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageComponentsResponseBodyImageComponent extends $dara.Model {
  imageComponentSet?: DescribeImageComponentsResponseBodyImageComponentImageComponentSet[];
  static names(): { [key: string]: string } {
    return {
      imageComponentSet: 'ImageComponentSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageComponentSet: { 'type': 'array', 'itemType': DescribeImageComponentsResponseBodyImageComponentImageComponentSet },
    };
  }

  validate() {
    if(Array.isArray(this.imageComponentSet)) {
      $dara.Model.validateArray(this.imageComponentSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageComponentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the image components.
   */
  imageComponent?: DescribeImageComponentsResponseBodyImageComponent;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. For information about how to use the returned value, see the "Usage notes" section of this topic.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of image components returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageComponent: 'ImageComponent',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageComponent: DescribeImageComponentsResponseBodyImageComponent,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.imageComponent && typeof (this.imageComponent as any).validate === 'function') {
      (this.imageComponent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


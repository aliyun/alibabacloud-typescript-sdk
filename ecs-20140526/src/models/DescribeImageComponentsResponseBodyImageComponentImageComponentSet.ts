// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageComponentsResponseBodyImageComponentImageComponentSetParameters } from "./DescribeImageComponentsResponseBodyImageComponentImageComponentSetParameters";
import { DescribeImageComponentsResponseBodyImageComponentImageComponentSetTags } from "./DescribeImageComponentsResponseBodyImageComponentImageComponentSetTags";


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


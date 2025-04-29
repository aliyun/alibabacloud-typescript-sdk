// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiGroupResponseBody extends $dara.Model {
  /**
   * @example
   * /qqq
   */
  basePath?: string;
  /**
   * @example
   * The weather informations
   */
  description?: string;
  /**
   * @example
   * 523e8dc7bbe04613b5b1d726c2a7xx
   */
  groupId?: string;
  /**
   * @example
   * Weather
   */
  groupName?: string;
  /**
   * @example
   * apigateway-cn-v6419k43xxxxx
   */
  instanceId?: string;
  /**
   * @example
   * VPC_SHARED
   */
  instanceType?: string;
  /**
   * @example
   * FF3B7D81-66AE-47E0-BF69-157DCF187514
   */
  requestId?: string;
  /**
   * @example
   * 523e8dc7bbe04613b5b1d726xxxxxxxx-cn-hangzhou.alicloudapi.com
   */
  subDomain?: string;
  /**
   * @example
   * True
   */
  tagStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      basePath: 'BasePath',
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      requestId: 'RequestId',
      subDomain: 'SubDomain',
      tagStatus: 'TagStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      instanceId: 'string',
      instanceType: 'string',
      requestId: 'string',
      subDomain: 'string',
      tagStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
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

export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether tag authorization is enabled.
   * 
   * @example
   * false
   */
  enableTagAuthorization?: boolean;
  /**
   * @remarks
   * The instance ID. If you do not specify this parameter, all instances are returned.
   * 
   * @example
   * api-shared-vpc-001
   */
  instanceId?: string;
  instanceType?: string;
  /**
   * @remarks
   * The language in which you want the description of the system policy to be returned. Valid values:
   * 
   * *   en: English
   * *   zh: Chinese
   * *   ja: Japanese
   * 
   * @example
   * zh
   */
  language?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tag that is bound to the instance.
   */
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      enableTagAuthorization: 'EnableTagAuthorization',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      language: 'Language',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTagAuthorization: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      language: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetVpcAccessRequestTag } from "./SetVpcAccessRequestTag";


export class SetVpcAccessRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the VPC.
   * 
   * @example
   * description of the VPC
   */
  description?: string;
  /**
   * @remarks
   * The ID of an ECS or SLB instance in the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * i-uf6bzcg1pr4oh5jjmxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the authorization. The name must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The port number that corresponds to the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  port?: number;
  securityToken?: string;
  /**
   * @remarks
   * The tag of objects that match the rule. You can specify multiple tags.
   */
  tag?: SetVpcAccessRequestTag[];
  /**
   * @remarks
   * The ID of the VPC. The VPC must be an available one that belongs to the same account as the API.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf657qec7lx42paw3qxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The host of the backend service.
   * 
   * @example
   * iot.hu***ng.com
   */
  vpcTargetHostName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      securityToken: 'SecurityToken',
      tag: 'Tag',
      vpcId: 'VpcId',
      vpcTargetHostName: 'VpcTargetHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
      port: 'number',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': SetVpcAccessRequestTag },
      vpcId: 'string',
      vpcTargetHostName: 'string',
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


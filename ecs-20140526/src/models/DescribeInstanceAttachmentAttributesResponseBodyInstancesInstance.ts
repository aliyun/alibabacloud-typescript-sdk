// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAttachmentAttributesResponseBodyInstancesInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-bp67acfmxazb4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the private pool. If the value of `PrivatePoolOptionsMatchCriteria` is `Open`, the value of PrivatePoolOptionsId is the ID of the private pool that is automatically matched to the instance.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  privatePoolOptionsId?: string;
  /**
   * @remarks
   * The match mode of the private pool. Valid values:
   * 
   * *   Open: open private pool. Instances automatically match an open private pool.
   * *   Target: specified private pool. Instances match a specified private pool.
   * *   None: no private pool. Instances do not use private pools.
   * 
   * @example
   * Open
   */
  privatePoolOptionsMatchCriteria?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      privatePoolOptionsId: 'PrivatePoolOptionsId',
      privatePoolOptionsMatchCriteria: 'PrivatePoolOptionsMatchCriteria',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      privatePoolOptionsId: 'string',
      privatePoolOptionsMatchCriteria: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


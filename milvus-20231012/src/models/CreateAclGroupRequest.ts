// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAclGroupRequest extends $dara.Model {
  /**
   * @example
   * 140.205.11.0/24,140.205.11.2
   */
  cidrs?: string;
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * c-xxxx
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrs: 'cidrs',
      groupName: 'groupName',
      instanceId: 'instanceId',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrs: 'string',
      groupName: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


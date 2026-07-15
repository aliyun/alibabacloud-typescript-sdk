// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The App Group ID. You can obtain this ID on the **Application Management** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The namespace ID. You can obtain this ID on the **Namespaces** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      namespace: 'Namespace',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      namespace: 'string',
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


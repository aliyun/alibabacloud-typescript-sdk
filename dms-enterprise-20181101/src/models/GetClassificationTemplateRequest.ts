// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClassificationTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can call the [ListInstances](https://help.aliyun.com/document_detail/141936.html) or [GetInstance](https://help.aliyun.com/document_detail/141567.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 169****
   */
  instanceId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 23***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


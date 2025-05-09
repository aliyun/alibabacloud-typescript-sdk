// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncInstanceMetaRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip synchronization for the metadata of table dictionaries. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  ignoreTable?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 12***
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the Manage DMS tenants topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      ignoreTable: 'IgnoreTable',
      instanceId: 'InstanceId',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreTable: 'boolean',
      instanceId: 'string',
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


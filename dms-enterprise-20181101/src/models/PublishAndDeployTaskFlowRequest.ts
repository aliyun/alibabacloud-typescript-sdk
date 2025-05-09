// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishAndDeployTaskFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task flow. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to query the task flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7***
   */
  dagId?: number;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * vc_test
   */
  versionComments?: string;
  static names(): { [key: string]: string } {
    return {
      dagId: 'DagId',
      tid: 'Tid',
      versionComments: 'VersionComments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagId: 'number',
      tid: 'number',
      versionComments: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


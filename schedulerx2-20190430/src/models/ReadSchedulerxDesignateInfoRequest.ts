// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadSchedulerxDesignateInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can find this ID on the **Application Management** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * test.defalutGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The job ID. You can find this ID on the **Task Management** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * 368
   */
  jobId?: number;
  /**
   * @remarks
   * The namespace UID. You can find this UID on the **Namespace** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required only for specific third-party integrations.
   * 
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
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


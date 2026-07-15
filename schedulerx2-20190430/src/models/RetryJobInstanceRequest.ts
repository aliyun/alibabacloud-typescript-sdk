// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryJobInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The application group ID. You can obtain the application group ID on the Application Management page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  jobId?: number;
  /**
   * @remarks
   * The node instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  jobInstanceId?: number;
  /**
   * @remarks
   * The namespace ID. You can obtain the namespace ID on the Namespace page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @remarks
   * This parameter is required only for special third-party users.
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
      jobInstanceId: 'JobInstanceId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      jobInstanceId: 'number',
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


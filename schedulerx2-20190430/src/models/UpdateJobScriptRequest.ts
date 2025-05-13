// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobScriptRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testSchedulerx.defaultGroup
   */
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 301
   */
  jobId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  namespace?: string;
  /**
   * @example
   * schedulerx
   */
  namespaceSource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  scriptContent?: string;
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespaceSource: 'NamespaceSource',
      regionId: 'RegionId',
      scriptContent: 'ScriptContent',
      versionDescription: 'VersionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      jobId: 'number',
      namespace: 'string',
      namespaceSource: 'string',
      regionId: 'string',
      scriptContent: 'string',
      versionDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


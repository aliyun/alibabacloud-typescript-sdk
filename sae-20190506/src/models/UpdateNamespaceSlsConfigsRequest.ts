// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceSlsConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The short ID of the namespace. You do not need to include the region. This parameter is recommended.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The configuration for collecting logs to SLS.
   * 
   * - To use an SLS resource that is automatically created by SAE: `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * 
   * - To use a custom SLS resource: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * The parameters are described as follows:
   * 
   * - `projectName`: The name of the SLS project.
   * 
   * - `logDir`: The log path.
   * 
   * - `logType`: The log type. A value of `stdout` specifies container standard output logs. You can specify only one `stdout` configuration. If you do not set this parameter, file logs are collected.
   * 
   * - `logstoreName`: The name of the SLS logstore.
   * 
   * - `logtailName`: The name of the Logtail. If you do not specify this parameter, a new Logtail is created.
   * 
   * If the SLS configuration remains the same across deployments, you can omit this parameter. To disable log collection to SLS, set the value of `SlsConfigs` to an empty string ("").
   * 
   * > SAE automatically deletes a project when you delete the task template used to create it. Therefore, when you select an existing project, do not select a project that was automatically created by SAE.
   * 
   * @example
   * [{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * The SLS log tags.
   */
  slsLogEnvTags?: string;
  static names(): { [key: string]: string } {
    return {
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
      slsConfigs: 'SlsConfigs',
      slsLogEnvTags: 'SlsLogEnvTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameSpaceShortId: 'string',
      namespaceId: 'string',
      slsConfigs: 'string',
      slsLogEnvTags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


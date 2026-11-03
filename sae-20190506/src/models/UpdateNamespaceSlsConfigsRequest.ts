// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceSlsConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The short ID of the namespace. The region is not required. This parameter is recommended.
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
   * The configuration for collecting logs to Simple Log Service (SLS).
   * 
   * - To use SLS resources automatically created by Serverless App Engine (SAE): `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * - To use custom SLS resources: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * The parameter settings are as follows:
   * 
   * - **projectName**: the name of the SLS project.  
   * - **logDir**: the log path.
   * - **logType**: the log type. **stdout** indicates container standard output logs. Only one stdout log can be set. If it is not set, file logs are collected.
   * - **logstoreName**: the name of the SLS Logstore.
   * - **logtailName**: the name of the SLS Logtail. If this parameter is not specified, a new Logtail is created.
   * 
   * If the SLS collection configuration remains unchanged during multiple deployments, you do not need to set this parameter (that is, the **SlsConfigs** field is not required in the request). If you no longer need the SLS collection feature, you must set the value of this field to an empty string (that is, set the **SlsConfigs** field to "") in the request.
   * 
   * > A project automatically created with a job template is deleted when the job template is deleted. Therefore, when you select an existing project, you cannot select a project automatically created by SAE.
   * 
   * @example
   * [{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * sls log tags
   * 
   * @example
   * []
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


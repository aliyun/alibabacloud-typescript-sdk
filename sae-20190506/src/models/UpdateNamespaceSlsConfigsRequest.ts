// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceSlsConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The short ID of the namespace. No need to specify a region ID. We recommend configuring this parameter.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The logging configurations of Simple Log Service.
   * 
   * *   `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`: Simple Log Service resources automatically created by Serverless App Engine (SAE) are used.
   * *   To use custom Simple Log Service resources, set this parameter to `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * Take note of the following subparameters:
   * 
   * *   **projectName**: the name of the Simple Log Service project.
   * *   **logDir**: the path in which logs are stored.
   * *   **logType**: the log type. **stdout** indicates the standard output (stdout) logs of the container. You can specify only one stdout value for this parameter. If not specified, file logs are collected.
   * *   **logstoreName**: the name of the Logstore in Simple Log Service.
   * *   **logtailName**: the name of the Logtail in Simple Log Service. If not specified, a new Logtail is created.
   * 
   * If logging configuration changes are not needed during job template deployment, specify **SlsConfigs** only in the first request. Omit this parameter in later requests. To stop using Simple Log Service, leave **SlsConfigs** empty.
   * 
   * > Projects automatically created by SAE for job templates are deleted when their corresponding job templates are deleted. Therefore, you should not select an existing SAE-created project for log collection.
   * 
   * @example
   * [{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]
   */
  slsConfigs?: string;
  static names(): { [key: string]: string } {
    return {
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
      slsConfigs: 'SlsConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameSpaceShortId: 'string',
      namespaceId: 'string',
      slsConfigs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


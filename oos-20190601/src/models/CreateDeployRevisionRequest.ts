// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeployRevisionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AgentColin3
   */
  applicationName?: string;
  /**
   * @example
   * Kubernetes
   */
  deployResourceType?: string;
  /**
   * @example
   * 2026-01-03
   */
  description?: string;
  /**
   * @example
   * {"applicationStart":"# Execute build process\\nbuild() {\\n  REPO_URL=\\"https://github.com/aldinokemal/go-whatsapp-web-multidevice.git\\"\\n  BRANCH=\\"main\\"\\n  DOCKERFILE_PATH=\\"./dockerfile\\"\\n  "}
   */
  hooks?: string;
  /**
   * @example
   * {"bucketName":"ecs-application-ui-test","objectName":"319137376-pipeline-run-319137376-task-1-cmd-exec.log","regionId":"cn-hangzhou"}
   */
  location?: string;
  /**
   * @example
   * Command
   */
  revisionType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      deployResourceType: 'DeployResourceType',
      description: 'Description',
      hooks: 'Hooks',
      location: 'Location',
      revisionType: 'RevisionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      deployResourceType: 'string',
      description: 'string',
      hooks: 'string',
      location: 'string',
      revisionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


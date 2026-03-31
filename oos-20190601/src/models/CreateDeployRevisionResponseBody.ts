// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeployRevisionResponseBodyRevision extends $dara.Model {
  /**
   * @example
   * AgentColin3
   */
  applicationName?: string;
  /**
   * @example
   * Ecs
   */
  deployResourceType?: string;
  /**
   * @example
   * 2026-01-05
   */
  description?: string;
  hooks?: string;
  /**
   * @example
   * {"bucketName":"ecs-application-ui-test","objectName":"319137376-pipeline-run-319137376-task-1-cmd-exec.log","regionId":"cn-hangzhou"}
   */
  location?: string;
  /**
   * @example
   * rev-0d6c6956faac431c891b
   */
  revisionId?: string;
  /**
   * @example
   * Oss
   */
  revisionType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      deployResourceType: 'DeployResourceType',
      description: 'Description',
      hooks: 'Hooks',
      location: 'Location',
      revisionId: 'RevisionId',
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
      revisionId: 'string',
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

export class CreateDeployRevisionResponseBody extends $dara.Model {
  /**
   * @example
   * 4DB0****1234
   */
  requestId?: string;
  /**
   * @example
   * {"RevisionId": "rev-0d6c6956faac431c891b", "ApplicationName": "AgentColin3"}
   */
  revision?: CreateDeployRevisionResponseBodyRevision;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      revision: 'Revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      revision: CreateDeployRevisionResponseBodyRevision,
    };
  }

  validate() {
    if(this.revision && typeof (this.revision as any).validate === 'function') {
      (this.revision as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


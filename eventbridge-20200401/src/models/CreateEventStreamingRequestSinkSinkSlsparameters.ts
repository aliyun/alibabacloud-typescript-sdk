// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestSinkSinkSLSParametersBody } from "./CreateEventStreamingRequestSinkSinkSlsparametersBody";
import { CreateEventStreamingRequestSinkSinkSLSParametersContentSchema } from "./CreateEventStreamingRequestSinkSinkSlsparametersContentSchema";
import { CreateEventStreamingRequestSinkSinkSLSParametersContentType } from "./CreateEventStreamingRequestSinkSinkSlsparametersContentType";
import { CreateEventStreamingRequestSinkSinkSLSParametersLogStore } from "./CreateEventStreamingRequestSinkSinkSlsparametersLogStore";
import { CreateEventStreamingRequestSinkSinkSLSParametersProject } from "./CreateEventStreamingRequestSinkSinkSlsparametersProject";
import { CreateEventStreamingRequestSinkSinkSLSParametersRoleName } from "./CreateEventStreamingRequestSinkSinkSlsparametersRoleName";
import { CreateEventStreamingRequestSinkSinkSLSParametersTopic } from "./CreateEventStreamingRequestSinkSinkSlsparametersTopic";


export class CreateEventStreamingRequestSinkSinkSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The message body that you want to deliver to Simple Log Service.
   */
  body?: CreateEventStreamingRequestSinkSinkSLSParametersBody;
  contentSchema?: CreateEventStreamingRequestSinkSinkSLSParametersContentSchema;
  contentType?: CreateEventStreamingRequestSinkSinkSLSParametersContentType;
  /**
   * @remarks
   * The Simple Log Service Logstore.
   */
  logStore?: CreateEventStreamingRequestSinkSinkSLSParametersLogStore;
  /**
   * @remarks
   * The Simple Log Service project.
   */
  project?: CreateEventStreamingRequestSinkSinkSLSParametersProject;
  /**
   * @remarks
   * The role name. If you want to authorize EventBridge to use this role to read logs in Simple Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the RAM console.
   */
  roleName?: CreateEventStreamingRequestSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The topic that you want to use to store logs. This parameter corresponds to the reserved field **topic** in Simple Log Service.
   */
  topic?: CreateEventStreamingRequestSinkSinkSLSParametersTopic;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      contentSchema: 'ContentSchema',
      contentType: 'ContentType',
      logStore: 'LogStore',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateEventStreamingRequestSinkSinkSLSParametersBody,
      contentSchema: CreateEventStreamingRequestSinkSinkSLSParametersContentSchema,
      contentType: CreateEventStreamingRequestSinkSinkSLSParametersContentType,
      logStore: CreateEventStreamingRequestSinkSinkSLSParametersLogStore,
      project: CreateEventStreamingRequestSinkSinkSLSParametersProject,
      roleName: CreateEventStreamingRequestSinkSinkSLSParametersRoleName,
      topic: CreateEventStreamingRequestSinkSinkSLSParametersTopic,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    if(this.contentSchema && typeof (this.contentSchema as any).validate === 'function') {
      (this.contentSchema as any).validate();
    }
    if(this.contentType && typeof (this.contentType as any).validate === 'function') {
      (this.contentType as any).validate();
    }
    if(this.logStore && typeof (this.logStore as any).validate === 'function') {
      (this.logStore as any).validate();
    }
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    if(this.roleName && typeof (this.roleName as any).validate === 'function') {
      (this.roleName as any).validate();
    }
    if(this.topic && typeof (this.topic as any).validate === 'function') {
      (this.topic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


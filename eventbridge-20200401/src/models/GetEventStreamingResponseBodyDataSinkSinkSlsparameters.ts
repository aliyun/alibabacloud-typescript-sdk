// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkSLSParametersBody } from "./GetEventStreamingResponseBodyDataSinkSinkSlsparametersBody";
import { GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentSchema } from "./GetEventStreamingResponseBodyDataSinkSinkSlsparametersContentSchema";
import { GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentType } from "./GetEventStreamingResponseBodyDataSinkSinkSlsparametersContentType";
import { GetEventStreamingResponseBodyDataSinkSinkSLSParametersLogStore } from "./GetEventStreamingResponseBodyDataSinkSinkSlsparametersLogStore";
import { GetEventStreamingResponseBodyDataSinkSinkSLSParametersProject } from "./GetEventStreamingResponseBodyDataSinkSinkSlsparametersProject";
import { GetEventStreamingResponseBodyDataSinkSinkSLSParametersRoleName } from "./GetEventStreamingResponseBodyDataSinkSinkSlsparametersRoleName";
import { GetEventStreamingResponseBodyDataSinkSinkSLSParametersTopic } from "./GetEventStreamingResponseBodyDataSinkSinkSlsparametersTopic";


export class GetEventStreamingResponseBodyDataSinkSinkSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The message content.
   */
  body?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersBody;
  contentSchema?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentSchema;
  contentType?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentType;
  /**
   * @remarks
   * The Simple Log Service Logstore.
   */
  logStore?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersLogStore;
  /**
   * @remarks
   * The Simple Log Service project.
   */
  project?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersProject;
  /**
   * @remarks
   * The role name. If you want to authorize EventBridge to use this role to read logs in Simple Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the Resource Access Management (RAM) console.
   */
  roleName?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The name of the topic in which logs are stored. The topic corresponds to the topic reserved field in Simple Log Service.
   */
  topic?: GetEventStreamingResponseBodyDataSinkSinkSLSParametersTopic;
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
      body: GetEventStreamingResponseBodyDataSinkSinkSLSParametersBody,
      contentSchema: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentSchema,
      contentType: GetEventStreamingResponseBodyDataSinkSinkSLSParametersContentType,
      logStore: GetEventStreamingResponseBodyDataSinkSinkSLSParametersLogStore,
      project: GetEventStreamingResponseBodyDataSinkSinkSLSParametersProject,
      roleName: GetEventStreamingResponseBodyDataSinkSinkSLSParametersRoleName,
      topic: GetEventStreamingResponseBodyDataSinkSinkSLSParametersTopic,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersBody } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSlsparametersBody";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentSchema } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSlsparametersContentSchema";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentType } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSlsparametersContentType";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersLogStore } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSlsparametersLogStore";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersProject } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSlsparametersProject";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersRoleName } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSlsparametersRoleName";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersTopic } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSlsparametersTopic";


export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The message body that is sent to Simple Log Service.
   */
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersBody;
  contentSchema?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentSchema;
  contentType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentType;
  /**
   * @remarks
   * The Simple Log Service Logstore.
   */
  logStore?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersLogStore;
  /**
   * @remarks
   * The Simple Log Service project.
   */
  project?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersProject;
  /**
   * @remarks
   * The role name. If you want to authorize EventBridge to use this role to read logs in Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the RAM console.
   */
  roleName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The name of the topic in which logs are stored. The topic corresponds to the topic reserved field in Simple Log Service.
   */
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersTopic;
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
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersBody,
      contentSchema: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentSchema,
      contentType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersContentType,
      logStore: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersLogStore,
      project: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersProject,
      roleName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersRoleName,
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkSLSParametersTopic,
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


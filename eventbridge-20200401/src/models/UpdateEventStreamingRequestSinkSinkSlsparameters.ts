// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkSLSParametersBody } from "./UpdateEventStreamingRequestSinkSinkSlsparametersBody";
import { UpdateEventStreamingRequestSinkSinkSLSParametersContentSchema } from "./UpdateEventStreamingRequestSinkSinkSlsparametersContentSchema";
import { UpdateEventStreamingRequestSinkSinkSLSParametersContentType } from "./UpdateEventStreamingRequestSinkSinkSlsparametersContentType";
import { UpdateEventStreamingRequestSinkSinkSLSParametersLogStore } from "./UpdateEventStreamingRequestSinkSinkSlsparametersLogStore";
import { UpdateEventStreamingRequestSinkSinkSLSParametersProject } from "./UpdateEventStreamingRequestSinkSinkSlsparametersProject";
import { UpdateEventStreamingRequestSinkSinkSLSParametersRoleName } from "./UpdateEventStreamingRequestSinkSinkSlsparametersRoleName";
import { UpdateEventStreamingRequestSinkSinkSLSParametersTopic } from "./UpdateEventStreamingRequestSinkSinkSlsparametersTopic";


export class UpdateEventStreamingRequestSinkSinkSLSParameters extends $dara.Model {
  /**
   * @remarks
   * The message body that you want to deliver to Simple Log Service.
   */
  body?: UpdateEventStreamingRequestSinkSinkSLSParametersBody;
  /**
   * @remarks
   * The key-value pair of custom logs. This parameter takes effect only if you set ContentType to KeyValue. Each key-value pair is in the Key_n, Value_n format.
   */
  contentSchema?: UpdateEventStreamingRequestSinkSinkSLSParametersContentSchema;
  /**
   * @remarks
   * The format of the Simple Log Service data. Valid values:
   * 
   * *   JSON
   * *   KeyValue
   */
  contentType?: UpdateEventStreamingRequestSinkSinkSLSParametersContentType;
  /**
   * @remarks
   * The Simple Log Service Logstore.
   */
  logStore?: UpdateEventStreamingRequestSinkSinkSLSParametersLogStore;
  /**
   * @remarks
   * The Simple Log Service project.
   */
  project?: UpdateEventStreamingRequestSinkSinkSLSParametersProject;
  /**
   * @remarks
   * The role name. If you want to authorize EventBridge to use this role to read logs in Simple Log Service, you must select Alibaba Cloud Service for Selected Trusted Entity and EventBridge for Select Trusted Service when you create the role in the Resource Access Management (RAM) console.
   */
  roleName?: UpdateEventStreamingRequestSinkSinkSLSParametersRoleName;
  /**
   * @remarks
   * The topic that you want to use to store logs. This parameter corresponds to the reserved field topic in Simple Log Service.
   */
  topic?: UpdateEventStreamingRequestSinkSinkSLSParametersTopic;
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
      body: UpdateEventStreamingRequestSinkSinkSLSParametersBody,
      contentSchema: UpdateEventStreamingRequestSinkSinkSLSParametersContentSchema,
      contentType: UpdateEventStreamingRequestSinkSinkSLSParametersContentType,
      logStore: UpdateEventStreamingRequestSinkSinkSLSParametersLogStore,
      project: UpdateEventStreamingRequestSinkSinkSLSParametersProject,
      roleName: UpdateEventStreamingRequestSinkSinkSLSParametersRoleName,
      topic: UpdateEventStreamingRequestSinkSinkSLSParametersTopic,
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


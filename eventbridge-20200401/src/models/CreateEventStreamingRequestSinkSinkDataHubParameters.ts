// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventStreamingRequestSinkSinkDataHubParametersBody } from "./CreateEventStreamingRequestSinkSinkDataHubParametersBody";
import { CreateEventStreamingRequestSinkSinkDataHubParametersProject } from "./CreateEventStreamingRequestSinkSinkDataHubParametersProject";
import { CreateEventStreamingRequestSinkSinkDataHubParametersRoleName } from "./CreateEventStreamingRequestSinkSinkDataHubParametersRoleName";
import { CreateEventStreamingRequestSinkSinkDataHubParametersTopic } from "./CreateEventStreamingRequestSinkSinkDataHubParametersTopic";
import { CreateEventStreamingRequestSinkSinkDataHubParametersTopicSchema } from "./CreateEventStreamingRequestSinkSinkDataHubParametersTopicSchema";
import { CreateEventStreamingRequestSinkSinkDataHubParametersTopicType } from "./CreateEventStreamingRequestSinkSinkDataHubParametersTopicType";


export class CreateEventStreamingRequestSinkSinkDataHubParameters extends $dara.Model {
  /**
   * @remarks
   * The BLOB topic.
   */
  body?: CreateEventStreamingRequestSinkSinkDataHubParametersBody;
  /**
   * @remarks
   * The name of the DataHub project.
   */
  project?: CreateEventStreamingRequestSinkSinkDataHubParametersProject;
  /**
   * @remarks
   * The role name.
   */
  roleName?: CreateEventStreamingRequestSinkSinkDataHubParametersRoleName;
  /**
   * @remarks
   * The name of the DataHub topic.
   */
  topic?: CreateEventStreamingRequestSinkSinkDataHubParametersTopic;
  /**
   * @remarks
   * The TUBLE topic.
   */
  topicSchema?: CreateEventStreamingRequestSinkSinkDataHubParametersTopicSchema;
  /**
   * @remarks
   * The topic type. Valid values:
   * 
   * *   TUPLE
   * *   BLOB
   */
  topicType?: CreateEventStreamingRequestSinkSinkDataHubParametersTopicType;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
      topicSchema: 'TopicSchema',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateEventStreamingRequestSinkSinkDataHubParametersBody,
      project: CreateEventStreamingRequestSinkSinkDataHubParametersProject,
      roleName: CreateEventStreamingRequestSinkSinkDataHubParametersRoleName,
      topic: CreateEventStreamingRequestSinkSinkDataHubParametersTopic,
      topicSchema: CreateEventStreamingRequestSinkSinkDataHubParametersTopicSchema,
      topicType: CreateEventStreamingRequestSinkSinkDataHubParametersTopicType,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
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
    if(this.topicSchema && typeof (this.topicSchema as any).validate === 'function') {
      (this.topicSchema as any).validate();
    }
    if(this.topicType && typeof (this.topicType as any).validate === 'function') {
      (this.topicType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


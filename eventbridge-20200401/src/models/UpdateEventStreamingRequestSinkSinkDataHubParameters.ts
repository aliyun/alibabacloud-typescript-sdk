// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateEventStreamingRequestSinkSinkDataHubParametersBody } from "./UpdateEventStreamingRequestSinkSinkDataHubParametersBody";
import { UpdateEventStreamingRequestSinkSinkDataHubParametersContentSchema } from "./UpdateEventStreamingRequestSinkSinkDataHubParametersContentSchema";
import { UpdateEventStreamingRequestSinkSinkDataHubParametersContentType } from "./UpdateEventStreamingRequestSinkSinkDataHubParametersContentType";
import { UpdateEventStreamingRequestSinkSinkDataHubParametersProject } from "./UpdateEventStreamingRequestSinkSinkDataHubParametersProject";
import { UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName } from "./UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName";
import { UpdateEventStreamingRequestSinkSinkDataHubParametersTopic } from "./UpdateEventStreamingRequestSinkSinkDataHubParametersTopic";
import { UpdateEventStreamingRequestSinkSinkDataHubParametersTopicSchema } from "./UpdateEventStreamingRequestSinkSinkDataHubParametersTopicSchema";
import { UpdateEventStreamingRequestSinkSinkDataHubParametersTopicType } from "./UpdateEventStreamingRequestSinkSinkDataHubParametersTopicType";


export class UpdateEventStreamingRequestSinkSinkDataHubParameters extends $dara.Model {
  body?: UpdateEventStreamingRequestSinkSinkDataHubParametersBody;
  contentSchema?: UpdateEventStreamingRequestSinkSinkDataHubParametersContentSchema;
  contentType?: UpdateEventStreamingRequestSinkSinkDataHubParametersContentType;
  project?: UpdateEventStreamingRequestSinkSinkDataHubParametersProject;
  roleName?: UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName;
  topic?: UpdateEventStreamingRequestSinkSinkDataHubParametersTopic;
  topicSchema?: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicSchema;
  topicType?: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicType;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      contentSchema: 'ContentSchema',
      contentType: 'ContentType',
      project: 'Project',
      roleName: 'RoleName',
      topic: 'Topic',
      topicSchema: 'TopicSchema',
      topicType: 'TopicType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateEventStreamingRequestSinkSinkDataHubParametersBody,
      contentSchema: UpdateEventStreamingRequestSinkSinkDataHubParametersContentSchema,
      contentType: UpdateEventStreamingRequestSinkSinkDataHubParametersContentType,
      project: UpdateEventStreamingRequestSinkSinkDataHubParametersProject,
      roleName: UpdateEventStreamingRequestSinkSinkDataHubParametersRoleName,
      topic: UpdateEventStreamingRequestSinkSinkDataHubParametersTopic,
      topicSchema: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicSchema,
      topicType: UpdateEventStreamingRequestSinkSinkDataHubParametersTopicType,
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


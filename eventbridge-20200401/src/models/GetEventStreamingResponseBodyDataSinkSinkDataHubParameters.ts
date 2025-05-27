// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEventStreamingResponseBodyDataSinkSinkDataHubParametersBody } from "./GetEventStreamingResponseBodyDataSinkSinkDataHubParametersBody";
import { GetEventStreamingResponseBodyDataSinkSinkDataHubParametersProject } from "./GetEventStreamingResponseBodyDataSinkSinkDataHubParametersProject";
import { GetEventStreamingResponseBodyDataSinkSinkDataHubParametersRoleName } from "./GetEventStreamingResponseBodyDataSinkSinkDataHubParametersRoleName";
import { GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopic } from "./GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopic";
import { GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicSchema } from "./GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicSchema";
import { GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicType } from "./GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicType";


export class GetEventStreamingResponseBodyDataSinkSinkDataHubParameters extends $dara.Model {
  body?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersBody;
  project?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersProject;
  roleName?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersRoleName;
  topic?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopic;
  topicSchema?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicSchema;
  topicType?: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicType;
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
      body: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersBody,
      project: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersProject,
      roleName: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersRoleName,
      topic: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopic,
      topicSchema: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicSchema,
      topicType: GetEventStreamingResponseBodyDataSinkSinkDataHubParametersTopicType,
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


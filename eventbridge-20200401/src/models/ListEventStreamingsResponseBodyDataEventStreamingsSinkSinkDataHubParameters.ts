// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersBody } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersBody";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersProject } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersProject";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersRoleName } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersRoleName";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopic } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopic";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicSchema } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicSchema";
import { ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicType } from "./ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicType";


export class ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParameters extends $dara.Model {
  body?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersBody;
  project?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersProject;
  roleName?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersRoleName;
  topic?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopic;
  topicSchema?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicSchema;
  topicType?: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicType;
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
      body: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersBody,
      project: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersProject,
      roleName: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersRoleName,
      topic: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopic,
      topicSchema: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicSchema,
      topicType: ListEventStreamingsResponseBodyDataEventStreamingsSinkSinkDataHubParametersTopicType,
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


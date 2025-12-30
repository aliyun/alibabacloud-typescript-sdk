// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaQualityAnalysisJobsResponseItemInput extends $dara.Model {
  media?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaQualityAnalysisJobsResponseItemScheduleConfig extends $dara.Model {
  pipelineId?: string;
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaQualityAnalysisJobsResponseItemTemplateConfig extends $dara.Model {
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaQualityAnalysisJobsResponseItem extends $dara.Model {
  createTime?: string;
  finishTime?: string;
  input?: ListMediaQualityAnalysisJobsResponseItemInput;
  jobId?: string;
  name?: string;
  scheduleConfig?: ListMediaQualityAnalysisJobsResponseItemScheduleConfig;
  state?: string;
  templateConfig?: ListMediaQualityAnalysisJobsResponseItemTemplateConfig;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      name: 'Name',
      scheduleConfig: 'ScheduleConfig',
      state: 'State',
      templateConfig: 'TemplateConfig',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      finishTime: 'string',
      input: ListMediaQualityAnalysisJobsResponseItemInput,
      jobId: 'string',
      name: 'string',
      scheduleConfig: ListMediaQualityAnalysisJobsResponseItemScheduleConfig,
      state: 'string',
      templateConfig: ListMediaQualityAnalysisJobsResponseItemTemplateConfig,
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    if(this.templateConfig && typeof (this.templateConfig as any).validate === 'function') {
      (this.templateConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


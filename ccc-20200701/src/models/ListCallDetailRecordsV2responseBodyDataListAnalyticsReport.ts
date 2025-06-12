// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportEmotion } from "./ListCallDetailRecordsV2responseBodyDataListAnalyticsReportEmotion";
import { ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportProblemSolving } from "./ListCallDetailRecordsV2responseBodyDataListAnalyticsReportProblemSolving";
import { ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportSatisfaction } from "./ListCallDetailRecordsV2responseBodyDataListAnalyticsReportSatisfaction";
import { ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportTodoList } from "./ListCallDetailRecordsV2responseBodyDataListAnalyticsReportTodoList";


export class ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReport extends $dara.Model {
  emotion?: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportEmotion;
  problemSolving?: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportProblemSolving;
  satisfaction?: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportSatisfaction;
  todoList?: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportTodoList;
  static names(): { [key: string]: string } {
    return {
      emotion: 'Emotion',
      problemSolving: 'ProblemSolving',
      satisfaction: 'Satisfaction',
      todoList: 'TodoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emotion: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportEmotion,
      problemSolving: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportProblemSolving,
      satisfaction: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportSatisfaction,
      todoList: ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportTodoList,
    };
  }

  validate() {
    if(this.emotion && typeof (this.emotion as any).validate === 'function') {
      (this.emotion as any).validate();
    }
    if(this.problemSolving && typeof (this.problemSolving as any).validate === 'function') {
      (this.problemSolving as any).validate();
    }
    if(this.satisfaction && typeof (this.satisfaction as any).validate === 'function') {
      (this.satisfaction as any).validate();
    }
    if(this.todoList && typeof (this.todoList as any).validate === 'function') {
      (this.todoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


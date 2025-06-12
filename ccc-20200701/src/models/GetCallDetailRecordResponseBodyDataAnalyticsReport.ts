// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCallDetailRecordResponseBodyDataAnalyticsReportEmotion } from "./GetCallDetailRecordResponseBodyDataAnalyticsReportEmotion";
import { GetCallDetailRecordResponseBodyDataAnalyticsReportProblemSolving } from "./GetCallDetailRecordResponseBodyDataAnalyticsReportProblemSolving";
import { GetCallDetailRecordResponseBodyDataAnalyticsReportSatisfaction } from "./GetCallDetailRecordResponseBodyDataAnalyticsReportSatisfaction";
import { GetCallDetailRecordResponseBodyDataAnalyticsReportTodoList } from "./GetCallDetailRecordResponseBodyDataAnalyticsReportTodoList";


export class GetCallDetailRecordResponseBodyDataAnalyticsReport extends $dara.Model {
  emotion?: GetCallDetailRecordResponseBodyDataAnalyticsReportEmotion;
  problemSolving?: GetCallDetailRecordResponseBodyDataAnalyticsReportProblemSolving;
  satisfaction?: GetCallDetailRecordResponseBodyDataAnalyticsReportSatisfaction;
  todoList?: GetCallDetailRecordResponseBodyDataAnalyticsReportTodoList;
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
      emotion: GetCallDetailRecordResponseBodyDataAnalyticsReportEmotion,
      problemSolving: GetCallDetailRecordResponseBodyDataAnalyticsReportProblemSolving,
      satisfaction: GetCallDetailRecordResponseBodyDataAnalyticsReportSatisfaction,
      todoList: GetCallDetailRecordResponseBodyDataAnalyticsReportTodoList,
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


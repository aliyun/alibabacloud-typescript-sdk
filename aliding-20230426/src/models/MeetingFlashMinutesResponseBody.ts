// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MeetingFlashMinutesResponseBodyBasicInfo extends $dara.Model {
  /**
   * @example
   * 500529
   */
  duration?: number;
  /**
   * @example
   * 1778490089000
   */
  endTime?: number;
  /**
   * @example
   * 1778490089000
   */
  startTime?: number;
  /**
   * @example
   * u0VGeOiPUBSVMypV3Hylp7wXXX
   */
  taskCreator?: string;
  /**
   * @example
   * XXX
   */
  title?: string;
  /**
   * @example
   * https://shanji.dingtalk.com/app/transcribes/76XXX
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      endTime: 'endTime',
      startTime: 'startTime',
      taskCreator: 'taskCreator',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      endTime: 'number',
      startTime: 'number',
      taskCreator: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MeetingFlashMinutesResponseBodyTodosDingtalkTodoListExecutorList extends $dara.Model {
  /**
   * @example
   * https://XXX221rNAbjNAbg_440_440.png
   */
  avatar?: string;
  /**
   * @example
   * XXX
   */
  nick?: string;
  /**
   * @example
   * u0VGeOiPUBSVMypV3Hylp7wXXX
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      nick: 'nick',
      unionId: 'unionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      nick: 'string',
      unionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MeetingFlashMinutesResponseBodyTodosDingtalkTodoList extends $dara.Model {
  /**
   * @example
   * 1778490089000
   */
  createdTime?: number;
  /**
   * @example
   * u0VGeOiPUBSVMypV3Hylp7wXXX
   */
  creatorUnionId?: string;
  /**
   * @example
   * deadline
   */
  deadline?: string;
  /**
   * @example
   * dingtalkTodoId
   */
  dingtalkTodoId?: string;
  executorList?: MeetingFlashMinutesResponseBodyTodosDingtalkTodoListExecutorList[];
  /**
   * @example
   * false
   */
  isDone?: boolean;
  /**
   * @example
   * minutesTodoId
   */
  minutesTodoId?: string;
  /**
   * @example
   * XXX
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      creatorUnionId: 'creatorUnionId',
      deadline: 'deadline',
      dingtalkTodoId: 'dingtalkTodoId',
      executorList: 'executorList',
      isDone: 'isDone',
      minutesTodoId: 'minutesTodoId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      creatorUnionId: 'string',
      deadline: 'string',
      dingtalkTodoId: 'string',
      executorList: { 'type': 'array', 'itemType': MeetingFlashMinutesResponseBodyTodosDingtalkTodoListExecutorList },
      isDone: 'boolean',
      minutesTodoId: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.executorList)) {
      $dara.Model.validateArray(this.executorList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MeetingFlashMinutesResponseBodyTodos extends $dara.Model {
  actions?: string[];
  dingtalkTodoList?: MeetingFlashMinutesResponseBodyTodosDingtalkTodoList[];
  static names(): { [key: string]: string } {
    return {
      actions: 'actions',
      dingtalkTodoList: 'dingtalkTodoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      dingtalkTodoList: { 'type': 'array', 'itemType': MeetingFlashMinutesResponseBodyTodosDingtalkTodoList },
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.dingtalkTodoList)) {
      $dara.Model.validateArray(this.dingtalkTodoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MeetingFlashMinutesResponseBody extends $dara.Model {
  basicInfo?: MeetingFlashMinutesResponseBodyBasicInfo;
  /**
   * @example
   * https://shanji.dingtalk.com/app/transcribes/76XXX
   */
  flashMinutesUrl?: string;
  /**
   * @example
   * XXX
   */
  fullSummary?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  todos?: MeetingFlashMinutesResponseBodyTodos;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      basicInfo: 'basicInfo',
      flashMinutesUrl: 'flashMinutesUrl',
      fullSummary: 'fullSummary',
      requestId: 'requestId',
      todos: 'todos',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicInfo: MeetingFlashMinutesResponseBodyBasicInfo,
      flashMinutesUrl: 'string',
      fullSummary: 'string',
      requestId: 'string',
      todos: MeetingFlashMinutesResponseBodyTodos,
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.basicInfo && typeof (this.basicInfo as any).validate === 'function') {
      (this.basicInfo as any).validate();
    }
    if(this.todos && typeof (this.todos as any).validate === 'function') {
      (this.todos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


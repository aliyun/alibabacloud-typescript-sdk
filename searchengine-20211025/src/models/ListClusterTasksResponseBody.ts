// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterTasksResponseBodyResultTags extends $dara.Model {
  /**
   * @remarks
   * The tag content.
   * 
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @remarks
   * The tag level.
   * 
   * @example
   * " "
   */
  tagLevel?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'msg',
      tagLevel: 'tagLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      tagLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTasksResponseBodyResultTaskNodes extends $dara.Model {
  /**
   * @remarks
   * The time when the task was complete.
   * 
   * @example
   * " "
   */
  finishDate?: string;
  /**
   * @remarks
   * The ordinal number of the task.
   * 
   * @example
   * 100
   */
  index?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * general
   */
  name?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * 2
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      finishDate: 'finishDate',
      index: 'index',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishDate: 'string',
      index: 'number',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTasksResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The additional attributes of the card.
   * 
   * @example
   * " "
   */
  extraAttribute?: string;
  /**
   * @remarks
   * The field3 field that was passed when the FSM was created.
   * 
   * @example
   * " "
   */
  field3?: string;
  /**
   * @remarks
   * The ID of the finite state machine (FSM).
   * 
   * @example
   * tisplus_opensearch@datasource_flow_fsm@1865410598556969-ha-cn-zvp2ljiwe01_api2@bj_vpc_domain_1@null@MANUAL-ha-cn-zvp2ljiwe01_api2@1649729867698@028315
   */
  fsmId?: string;
  /**
   * @remarks
   * The change group type.
   * 
   * @example
   * " "
   */
  groupType?: string;
  /**
   * @remarks
   * The card name.
   * 
   * @example
   * ha-cn-pl32rf0js04_qrs
   */
  name?: string;
  /**
   * @remarks
   * The FSM status.
   * 
   * @example
   * onlyPublished
   */
  status?: string;
  /**
   * @remarks
   * The tags of the progress bar.
   */
  tags?: ListClusterTasksResponseBodyResultTags[];
  /**
   * @remarks
   * The task information.
   */
  taskNodes?: ListClusterTasksResponseBodyResultTaskNodes[];
  /**
   * @remarks
   * The timestamp of the card.
   * 
   * @example
   * 1657610520
   */
  time?: string;
  /**
   * @remarks
   * The card type.
   * 
   * @example
   * qrs
   */
  type?: string;
  /**
   * @remarks
   * The user who triggered the generation of the FSM process.
   * 
   * @example
   * " "
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      extraAttribute: 'extraAttribute',
      field3: 'field3',
      fsmId: 'fsmId',
      groupType: 'groupType',
      name: 'name',
      status: 'status',
      tags: 'tags',
      taskNodes: 'taskNodes',
      time: 'time',
      type: 'type',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extraAttribute: 'string',
      field3: 'string',
      fsmId: 'string',
      groupType: 'string',
      name: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListClusterTasksResponseBodyResultTags },
      taskNodes: { 'type': 'array', 'itemType': ListClusterTasksResponseBodyResultTaskNodes },
      time: 'string',
      type: 'string',
      user: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.taskNodes)) {
      $dara.Model.validateArray(this.taskNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * CC5EC8FA-5C0D-56AF-BEF4-6FCCEABD0511
   */
  requestId?: string;
  /**
   * @remarks
   * The index information.
   */
  result?: ListClusterTasksResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListClusterTasksResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


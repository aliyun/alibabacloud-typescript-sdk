// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataSourceTasksResponseBodyResultTags extends $dara.Model {
  /**
   * @remarks
   * The tag content.
   * 
   * @example
   * test-tag
   */
  msg?: string;
  /**
   * @remarks
   * The tag level.
   * 
   * @example
   * 1
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

export class ListDataSourceTasksResponseBodyResultTaskNodes extends $dara.Model {
  /**
   * @remarks
   * The time when the task was complete.
   * 
   * @example
   * 2024-06-17 18:40:48
   */
  finishDate?: string;
  /**
   * @remarks
   * The ordinal number of the task.
   * 
   * @example
   * 4
   */
  index?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * publish config version
   */
  name?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * SUCCESS
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

export class ListDataSourceTasksResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The additional attributes of the card.
   * 
   * @example
   * {
   * 	"consoleVersion": "",
   * 	"domain": "hz_pre_vpc_domain_1",
   * 	"configType": "offline"
   * }
   */
  extraAttribute?: string;
  /**
   * @remarks
   * The field3 field that was passed when the FSM was created.
   * 
   * @example
   * {
   * 	"ha-cn-pl32rf0****_offline_adv": 1,
   * 	"ha-cn-pl32rf0****_offline_plugin": 1,
   * 	"ha-cn-pl32rf0****_table_ha-cn-35t3r02iq03_test_api": 1,
   * 	"ha-cn-pl32rf0****@ha-cn-pl32rf0****_test_api@hz_pre_vpc_domain_1@test_api@index_config": 1,
   * 	"ha-cn-pl32rf0****_offline_dict": 1
   * }
   */
  field3?: string;
  /**
   * @remarks
   * The ID of the finite state machine (FSM).
   * 
   * @example
   * tisplus_opensearch@datasource_flow_fsm@1865410598556969-ha-cn-pl32rf0****_api2@bj_vpc_domain_1@null@MANUAL-ha-cn-pl32rf0****_api2@1649729867698@028315
   */
  fsmId?: string;
  /**
   * @remarks
   * The change group type.
   * 
   * @example
   * Table_Update
   */
  groupType?: string;
  /**
   * @remarks
   * The card name.
   * 
   * @example
   * ha-cn-pl32rf0****_qrs
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
  tags?: ListDataSourceTasksResponseBodyResultTags[];
  /**
   * @remarks
   * The task information.
   */
  taskNodes?: ListDataSourceTasksResponseBodyResultTaskNodes[];
  /**
   * @remarks
   * The timestamp of the card.
   * 
   * @example
   * 1646279473
   */
  time?: string;
  /**
   * @remarks
   * The card type.
   * 
   * @example
   * mra_table_config_trace_fsm
   */
  type?: string;
  /**
   * @remarks
   * The user who triggered the generation of the FSM process.
   * 
   * @example
   * admin
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
      tags: { 'type': 'array', 'itemType': ListDataSourceTasksResponseBodyResultTags },
      taskNodes: { 'type': 'array', 'itemType': ListDataSourceTasksResponseBodyResultTaskNodes },
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

export class ListDataSourceTasksResponseBody extends $dara.Model {
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
  result?: ListDataSourceTasksResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataSourceTasksResponseBodyResult },
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


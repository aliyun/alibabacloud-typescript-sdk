// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClusterTasksResponseBodyResultTags } from "./ListClusterTasksResponseBodyResultTags";
import { ListClusterTasksResponseBodyResultTaskNodes } from "./ListClusterTasksResponseBodyResultTaskNodes";


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


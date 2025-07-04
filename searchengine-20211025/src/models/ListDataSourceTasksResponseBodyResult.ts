// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataSourceTasksResponseBodyResultTags } from "./ListDataSourceTasksResponseBodyResultTags";
import { ListDataSourceTasksResponseBodyResultTaskNodes } from "./ListDataSourceTasksResponseBodyResultTaskNodes";


export class ListDataSourceTasksResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The additional attributes of the card.
   * 
   * @example
   * ""
   */
  extraAttribute?: string;
  /**
   * @remarks
   * The field3 field that was passed when the FSM was created.
   * 
   * @example
   * ""
   */
  field3?: string;
  /**
   * @remarks
   * The ID of the finite state machine (FSM).
   * 
   * @example
   * tisplus_opensearch@datasource_flow_fsm@1062017779051424-ha-cn-2r42ostoc01_ecom_table@vpc_hz_domain_1@null@MANUAL-ha-cn-2r42ostoc01_ecom_table@1655974525756@006754
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
   * general
   */
  name?: string;
  /**
   * @remarks
   * The FSM status.
   * 
   * @example
   * 2
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
   * search
   */
  type?: string;
  /**
   * @remarks
   * The user who triggered the generation of the FSM process.
   * 
   * @example
   * ""
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


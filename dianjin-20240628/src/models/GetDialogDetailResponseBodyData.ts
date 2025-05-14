// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDialogDetailResponseBodyDataDialogueList } from "./GetDialogDetailResponseBodyDataDialogueList";


export class GetDialogDetailResponseBodyData extends $dara.Model {
  dialogueList?: GetDialogDetailResponseBodyDataDialogueList[];
  /**
   * @example
   * 2024-09-27 11:23:20
   */
  gmtCreate?: string;
  /**
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @example
   * 10
   */
  totalDialogTurns?: number;
  /**
   * @example
   * 5
   */
  validDialogTurns?: number;
  static names(): { [key: string]: string } {
    return {
      dialogueList: 'dialogueList',
      gmtCreate: 'gmtCreate',
      status: 'status',
      totalDialogTurns: 'totalDialogTurns',
      validDialogTurns: 'validDialogTurns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueList: { 'type': 'array', 'itemType': GetDialogDetailResponseBodyDataDialogueList },
      gmtCreate: 'string',
      status: 'string',
      totalDialogTurns: 'number',
      validDialogTurns: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dialogueList)) {
      $dara.Model.validateArray(this.dialogueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


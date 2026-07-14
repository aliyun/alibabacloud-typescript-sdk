// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDialogRequest extends $dara.Model {
  /**
   * @remarks
   * The channel.
   * 
   * This parameter is required.
   * 
   * @example
   * taobao
   */
  channel?: string;
  /**
   * @remarks
   * Specifies whether to enable the intent library.
   * 
   * @example
   * false
   */
  enableLibrary?: boolean;
  /**
   * @remarks
   * Other information.
   * 
   * @example
   * null
   */
  metaData?: { [key: string]: any };
  /**
   * @remarks
   * The playbook code.
   * 
   * This parameter is required.
   * 
   * @example
   * live_broadcast_qa
   */
  playCode?: string;
  /**
   * @remarks
   * A list of Q\\&A library IDs.
   */
  qaLibraryList?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ebf83826-dc1c-46f8-9759-0fb6da4c8xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Specifies whether to enable autonomous Q\\&A.
   * 
   * @example
   * false
   */
  selfDirected?: boolean;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      enableLibrary: 'enableLibrary',
      metaData: 'metaData',
      playCode: 'playCode',
      qaLibraryList: 'qaLibraryList',
      requestId: 'requestId',
      selfDirected: 'selfDirected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      enableLibrary: 'boolean',
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      playCode: 'string',
      qaLibraryList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      selfDirected: 'boolean',
    };
  }

  validate() {
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    if(Array.isArray(this.qaLibraryList)) {
      $dara.Model.validateArray(this.qaLibraryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


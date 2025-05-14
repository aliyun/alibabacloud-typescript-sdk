// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDialogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * taobao
   */
  channel?: string;
  enableLibrary?: boolean;
  /**
   * @example
   * null
   */
  metaData?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * live_broadcast_qa
   */
  playCode?: string;
  qaLibraryList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ebf83826-dc1c-46f8-9759-0fb6da4c8xxx
   */
  requestId?: string;
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


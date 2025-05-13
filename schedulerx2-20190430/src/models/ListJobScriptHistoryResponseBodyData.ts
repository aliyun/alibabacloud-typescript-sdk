// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobScriptHistoryResponseBodyDataJobScriptHistoryInfos } from "./ListJobScriptHistoryResponseBodyDataJobScriptHistoryInfos";


export class ListJobScriptHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * -
   */
  jobScriptHistoryInfos?: ListJobScriptHistoryResponseBodyDataJobScriptHistoryInfos[];
  static names(): { [key: string]: string } {
    return {
      jobScriptHistoryInfos: 'JobScriptHistoryInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobScriptHistoryInfos: { 'type': 'array', 'itemType': ListJobScriptHistoryResponseBodyDataJobScriptHistoryInfos },
    };
  }

  validate() {
    if(Array.isArray(this.jobScriptHistoryInfos)) {
      $dara.Model.validateArray(this.jobScriptHistoryInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobScriptHistoryResponseBodyDataJobScriptHistoryInfos extends $dara.Model {
  /**
   * @example
   * 2025-03-12 14:52:42
   */
  createTime?: string;
  /**
   * @example
   * 1272118248844842
   */
  creator?: string;
  scriptContent?: string;
  /**
   * @example
   * init version
   */
  versionesDescription?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      scriptContent: 'ScriptContent',
      versionesDescription: 'VersionesDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: 'string',
      scriptContent: 'string',
      versionesDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIndexResponseBodyResultVersionsFiles } from "./GetIndexResponseBodyResultVersionsFiles";


export class GetIndexResponseBodyResultVersions extends $dara.Model {
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * close alarm, by 3.9.2 hotfix workflow
   */
  desc?: string;
  /**
   * @remarks
   * The information about the files.
   */
  files?: GetIndexResponseBodyResultVersionsFiles[];
  /**
   * @remarks
   * The version name.
   * 
   * @example
   * ha-cn-7pp2ngv4s02_qrs
   */
  name?: string;
  /**
   * @remarks
   * The status of the index version. Valid values:
   * 
   * *   NEW: The index version is created.
   * *   PUBLISH: The index version is normal.
   * *   IN_USE: The index version is in use.
   * *   NOT_USE: The index version is not used.
   * *   STOP_USE: The index version is being stopped.
   * *   RESTORE_USE: The index version is being restored.
   * *   FAIL: The index version failed to be created.
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * The time when the index version was updated.
   * 
   * @example
   * " "
   */
  updateTime?: number;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 1
   */
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      files: 'files',
      name: 'name',
      status: 'status',
      updateTime: 'updateTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      files: { 'type': 'array', 'itemType': GetIndexResponseBodyResultVersionsFiles },
      name: 'string',
      status: 'string',
      updateTime: 'number',
      versionId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


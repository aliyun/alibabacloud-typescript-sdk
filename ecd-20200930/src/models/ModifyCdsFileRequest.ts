// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCdsFileRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-64326*****
   */
  cdsId?: string;
  /**
   * @remarks
   * The processing mode of files that have the same name.
   * 
   * Valid values:
   * 
   * *   refuse
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     refuses to create a file that has the same name as the file in the cloud.
   * 
   *     <!-- -->
   * 
   * *   auto_rename
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     automatically renames a file if the file has the same name as another file. By default, the current point in time is appended. Example: xxx20060102_150405.
   * 
   *     <!-- -->
   * 
   * *   ignore
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     allows files with the same name.
   * 
   *     <!-- -->
   * 
   * @example
   * ignore
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * The ID of the end user who uses the cloud disk.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6333e553a133ce21e6f747cf948bb9ef95d7****
   */
  fileId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * This parameter is required.
   * 
   * @example
   * test.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      conflictPolicy: 'ConflictPolicy',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      fileName: 'FileName',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      conflictPolicy: 'string',
      endUserId: 'string',
      fileId: 'string',
      fileName: 'string',
      groupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


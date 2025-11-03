// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCdsFileRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-64326*****
   */
  cdsId?: string;
  /**
   * @remarks
   * The processing policy when a file with the same name appears.
   * 
   * Valid values:
   * 
   * *   refuse: If you want to create a file that uses the same name as an existing file in the cloud, the system denies your request and returns the details of the existing file.
   * *   auto_rename: automatically renames a file if the file has the same name as an existing file in the cloud. By default, the current point in time is appended to the end of the original file name. Example: xxx20240102_150405.
   * *   ignore: allows the file to be with the same name.
   * *   over_write: After you create a file that uses the same name as an existing file in the cloud, the new file overwrites the existing file.
   * 
   * @example
   * ignore
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * The ID of the user who uses the network disk.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The ID of the file. You can call the [ListCdsFiles](https://help.aliyun.com/document_detail/2247622.html) operation to query the ID of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * 6333e553a133ce21e6f747cf948bb9ef95d7****
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * test.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the team space.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
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


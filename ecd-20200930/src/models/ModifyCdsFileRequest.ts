// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCdsFileRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise cloud disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-643267****
   */
  cdsId?: string;
  /**
   * @remarks
   * The conflict resolution policy when a file with the same name exists.
   * 
   * @example
   * ignore
   */
  conflictPolicy?: string;
  /**
   * @remarks
   * The ID of the user who uses the cloud disk.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The file ID. You can call [ListCdsFiles](https://help.aliyun.com/document_detail/2247622.html) to query the ID of the file.
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
   * NewFileName.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The team space ID.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
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


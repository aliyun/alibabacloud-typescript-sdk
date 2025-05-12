// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteCdsFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+cds-465878****
   */
  cdsId?: string;
  /**
   * @remarks
   * The name of the end user.
   * 
   * @example
   * test0
   */
  endUserId?: string;
  /**
   * @remarks
   * The file ID. An ID is the unique identifier of a file.
   * 
   * This parameter is required.
   * 
   * @example
   * 635a316c94f40f35f5354da29b2aee88c9d1****
   */
  fileId?: string;
  groupId?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the file uploading task.
   * 
   * This parameter is required.
   * 
   * @example
   * 6C48B55A1FAC4E1A9E0579059514****
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      groupId: 'GroupId',
      regionId: 'RegionId',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
      regionId: 'string',
      uploadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


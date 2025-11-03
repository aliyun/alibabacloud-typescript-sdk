// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteCdsFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise drive.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+cds-465878****
   */
  cdsId?: string;
  /**
   * @remarks
   * The username. You must specify at least one of `EndUserId` and `GroupId`.
   * 
   * @example
   * test0
   */
  endUserId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 635a316c94f40f35f5354da29b2aee88c9d1****
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the team space. You must specify at least one of `EndUserId` and `GroupId`.
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
  /**
   * @remarks
   * The ID of the file upload task. Callable interface [CreateCdsFile](https://help.aliyun.com/document_detail/2247619.html).
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


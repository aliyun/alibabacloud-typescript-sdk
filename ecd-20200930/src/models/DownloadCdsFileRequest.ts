// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadCdsFileRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise drive ID.
   * 
   * @example
   * cn-hangzhou+cds-643267****
   */
  cdsId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * user****
   */
  endUserId?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 63f3257b68b018170b194d87b875512d108f****
   */
  fileId?: string;
  /**
   * @remarks
   * The team ID.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The region ID.
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
      endUserId: 'EndUserId',
      fileId: 'FileId',
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
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


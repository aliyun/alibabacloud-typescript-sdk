// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CdnFileDownloadCallbackInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccp-bj1-bj-1234
   */
  bucket?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  driveId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  expire?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  fileId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  object?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * md5.Sum([]byte(fmt.Sprintf("%v%v%v%v%v%v...%v", 		req.Object, req.Range, req.DomainID, req.DriveID, req.UserID, req.FileID, req.Expire)))
   */
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      domainId: 'domain_id',
      driveId: 'drive_id',
      expire: 'expire',
      fileId: 'file_id',
      object: 'object',
      token: 'token',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      domainId: 'string',
      driveId: 'string',
      expire: 'number',
      fileId: 'string',
      object: 'string',
      token: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


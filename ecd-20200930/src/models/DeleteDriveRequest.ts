// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDriveRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * dom-aaaa****
   */
  domainId?: string;
  /**
   * @remarks
   * The ID of the user-level storage resource.
   * 
   * @example
   * dri-aaaa****
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the end user. This parameter is used when locating the UPM drive by using DomainId or OfficeSiteId.
   * 
   * @example
   * abc****
   */
  endUserId?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * cn-hangzhou+dir-467671****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      driveId: 'DriveId',
      endUserId: 'EndUserId',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      driveId: 'string',
      endUserId: 'string',
      officeSiteId: 'string',
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


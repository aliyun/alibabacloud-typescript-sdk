// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDriveRequest extends $dara.Model {
  /**
   * @remarks
   * The drive name.
   */
  driveName?: string;
  /**
   * @remarks
   * The maximum number of asynchronous tasks to return. Valid values: 1 to 100. Default value: 100.
   * 
   * @example
   * 100
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of marker.\\
   * By default, this parameter is left empty.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg
   */
  marker?: string;
  /**
   * @remarks
   * The owner of the drive.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  owner?: string;
  /**
   * @remarks
   * The type of the owner. Valid values:
   * 
   * user group
   * 
   * @example
   * user
   */
  ownerType?: string;
  static names(): { [key: string]: string } {
    return {
      driveName: 'drive_name',
      limit: 'limit',
      marker: 'marker',
      owner: 'owner',
      ownerType: 'owner_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveName: 'string',
      limit: 'number',
      marker: 'string',
      owner: 'string',
      ownerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


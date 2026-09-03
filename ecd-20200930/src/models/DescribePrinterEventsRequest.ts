// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrinterEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud computer ID. If you do not specify this parameter, all cloud computers in the region are queried.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The cloud computer name.
   * 
   * @example
   * desktop-001
   */
  desktopName?: string;
  /**
   * @remarks
   * The end time. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC+0. If you do not specify this parameter, the current time is used.
   * 
   * @example
   * 2020-11-31T06:32:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The logon user information, which is a RAM user ID or an Active Directory (AD) username. If you do not specify this parameter, events of all users in the region are queried.
   * 
   * @example
   * user001
   */
  endUserId?: string;
  /**
   * @remarks
   * The list of end user IDs.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of NextToken that was returned in the previous API call.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The printer driver name.
   * 
   * @example
   * HP LaserJet PCL 6
   */
  printerDriver?: string;
  /**
   * @remarks
   * The printer name.
   * 
   * @example
   * HP LaserJet Pro
   */
  printerName?: string;
  /**
   * @remarks
   * The printer redirection type.
   * 
   * @example
   * 1
   */
  printerRedirType?: number;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the YYYY-MM-DDThh:mm:ssZ format. The time must be in UTC+0. If you do not specify this parameter, the query starts from the time that is calculated backward from the time specified by `EndTime`.
   * 
   * @example
   * 2022-03-23T04:10:21Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      endTime: 'EndTime',
      endUserId: 'EndUserId',
      endUserIds: 'EndUserIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      printerDriver: 'PrinterDriver',
      printerName: 'PrinterName',
      printerRedirType: 'PrinterRedirType',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopName: 'string',
      endTime: 'string',
      endUserId: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      printerDriver: 'string',
      printerName: 'string',
      printerRedirType: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


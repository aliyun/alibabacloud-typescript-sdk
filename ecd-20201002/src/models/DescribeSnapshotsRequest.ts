// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * 16dad2b6-3c6d-4e4c-b057-78ecb13c****
   */
  clientId?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v16abfb945208fc5745061668654680853da4a25202d1a394fcad57bba484e9827ad43ea7d10fb6bf13d44a4adc0e9****
   */
  loginToken?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * a99b9aca-bac5-4da2-819e-400ce98f****
   */
  sessionId?: string;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-2ze81owrnv9pity4****
   */
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      desktopId: 'DesktopId',
      loginToken: 'LoginToken',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      desktopId: 'string',
      loginToken: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      sessionId: 'string',
      snapshotId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


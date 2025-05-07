// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 16dad2b6-3c6d-4e4c-b057-78ecb13c****
   */
  clientId?: string;
  /**
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v16abfb945208fc5745061668654680853da4a25202d1a394fcad57bba484e9827ad43ea7d10fb6bf13d44a4adc0e9****
   */
  loginToken?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * a99b9aca-bac5-4da2-819e-400ce98f****
   */
  sessionId?: string;
  /**
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


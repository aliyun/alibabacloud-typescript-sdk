// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayErrorAccessLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name filter. This parameter performs an exact match on the authority field in Simple Log Service (SLS).
   * 
   * @example
   * api.example.com
   */
  authority?: string;
  /**
   * @remarks
   * The end time of the query window, in UNIX seconds. The value cannot be later than the current time, and the time span must be less than or equal to 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1756348800
   */
  endTime?: number;
  /**
   * @remarks
   * The exact filter for the gateway request ID (x-acs-request-id).
   * 
   * @example
   * E5D4xxxx
   */
  gatewayRequestId?: string;
  /**
   * @remarks
   * The request path filter.
   * 
   * @example
   * /api/v1/pets
   */
  path?: string;
  /**
   * @remarks
   * The specific HTTP error code. Only three-digit numbers in the range of 400 to 599 are accepted. This parameter is required. If it is not provided, the API returns the InvalidParameter.WithDetail(400) error.
   * 
   * @example
   * 502
   */
  responseCode?: string;
  /**
   * @remarks
   * The route name filter.
   * 
   * @example
   * my-route
   */
  routeName?: string;
  /**
   * @remarks
   * The start time of the query window, in UNIX seconds. The value must be greater than or equal to the current time minus 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1756262400
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      authority: 'authority',
      endTime: 'endTime',
      gatewayRequestId: 'gatewayRequestId',
      path: 'path',
      responseCode: 'responseCode',
      routeName: 'routeName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authority: 'string',
      endTime: 'number',
      gatewayRequestId: 'string',
      path: 'string',
      responseCode: 'string',
      routeName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


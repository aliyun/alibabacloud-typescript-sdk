// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayErrorAccessLogsRequest extends $dara.Model {
  /**
   * @example
   * api.example.com
   */
  authority?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1756348800
   */
  endTime?: number;
  /**
   * @example
   * E5D4xxxx
   */
  gatewayRequestId?: string;
  /**
   * @example
   * /api/v1/pets
   */
  path?: string;
  /**
   * @example
   * 502
   */
  responseCode?: string;
  /**
   * @example
   * my-route
   */
  routeName?: string;
  /**
   * @remarks
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


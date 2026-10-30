// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAifgJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The maximum number of records to retrieve at a time.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination cursor. A non-empty value indicates that more data is available.
   * 
   * @example
   * c2f78a783f49457caba6bace6f6f79e4
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The diagnostic service name.
   * 
   * This parameter is required.
   * 
   * @example
   * slowNode
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageSize: 'pageSize',
      region: 'region',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      maxResults: 'number',
      nextToken: 'string',
      pageSize: 'number',
      region: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


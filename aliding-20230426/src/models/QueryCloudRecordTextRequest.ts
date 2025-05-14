// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCloudRecordTextRequestTenantContext } from "./QueryCloudRecordTextRequestTenantContext";


export class QueryCloudRecordTextRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  direction?: string;
  /**
   * @example
   * 20000
   */
  maxResults?: number;
  /**
   * @example
   * 1631172045153000
   */
  nextToken?: number;
  /**
   * @example
   * 7940
   */
  startTime?: number;
  tenantContext?: QueryCloudRecordTextRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'Direction',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      startTime: 'StartTime',
      tenantContext: 'TenantContext',
      conferenceId: 'conferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      maxResults: 'number',
      nextToken: 'number',
      startTime: 'number',
      tenantContext: QueryCloudRecordTextRequestTenantContext,
      conferenceId: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


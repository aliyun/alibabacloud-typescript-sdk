// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCloudRecordTextShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
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
      tenantContextShrink: 'TenantContext',
      conferenceId: 'conferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      maxResults: 'number',
      nextToken: 'number',
      startTime: 'number',
      tenantContextShrink: 'string',
      conferenceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


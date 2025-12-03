// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportInsightWorkitemStatusJoinWorkitemDefectExtraRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-06-01 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-05-01 00:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


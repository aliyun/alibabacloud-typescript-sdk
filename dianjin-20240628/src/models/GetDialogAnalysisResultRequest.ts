// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDialogAnalysisResultRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  asc?: boolean;
  /**
   * @example
   * 2024-09-23 09:20:02
   */
  endTime?: string;
  sessionIds?: string[];
  /**
   * @example
   * 2024-09-14 09:11:00
   */
  startTime?: string;
  /**
   * @example
   * true
   */
  useUrl?: boolean;
  static names(): { [key: string]: string } {
    return {
      asc: 'asc',
      endTime: 'endTime',
      sessionIds: 'sessionIds',
      startTime: 'startTime',
      useUrl: 'useUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      endTime: 'string',
      sessionIds: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      useUrl: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.sessionIds)) {
      $dara.Model.validateArray(this.sessionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


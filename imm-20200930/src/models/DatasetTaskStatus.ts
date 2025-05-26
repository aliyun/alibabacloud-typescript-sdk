// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetTaskStatus extends $dara.Model {
  /**
   * @example
   * 2024-06-29T14:50:13.011643661+08:00
   */
  lastSucceededTime?: string;
  /**
   * @example
   * 2024-06-29T14:50:13.011643661+08:00
   */
  startTime?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      lastSucceededTime: 'LastSucceededTime',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastSucceededTime: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


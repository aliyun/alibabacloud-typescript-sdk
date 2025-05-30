// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobInfoResponseBodyDataJobSubStatusList extends $dara.Model {
  /**
   * @remarks
   * The encoding of the substatus.
   * 
   * @example
   * 1010
   */
  code?: number;
  /**
   * @remarks
   * The description of the substatus.
   * 
   * @example
   * Waiting for scheduling
   */
  description?: string;
  /**
   * @remarks
   * The start time of the substatus.
   * 
   * @example
   * 2025-03-05 00:04:15.717364 +0800
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      description: 'description',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      description: 'string',
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


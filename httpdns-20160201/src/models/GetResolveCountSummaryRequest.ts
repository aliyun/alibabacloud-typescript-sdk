// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResolveCountSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * day
   */
  granularity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7
   */
  timeSpan?: number;
  static names(): { [key: string]: string } {
    return {
      granularity: 'Granularity',
      timeSpan: 'TimeSpan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      granularity: 'string',
      timeSpan: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


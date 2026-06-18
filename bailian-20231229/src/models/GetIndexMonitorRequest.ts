// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The end time can be a maximum of 30 days after the start time. This is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1767604500
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The unique ID of the target knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * kb-123456xxxx
   */
  indexId?: string;
  /**
   * @remarks
   * The start of the time range to query. This is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1767604500
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      endTimestamp: 'EndTimestamp',
      indexId: 'IndexId',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimestamp: 'number',
      indexId: 'string',
      startTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


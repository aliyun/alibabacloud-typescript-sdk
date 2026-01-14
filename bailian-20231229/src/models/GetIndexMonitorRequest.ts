// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIndexMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1767604500
   */
  endTimestamp?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kb-123456xxxx
   */
  indexId?: string;
  /**
   * @remarks
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


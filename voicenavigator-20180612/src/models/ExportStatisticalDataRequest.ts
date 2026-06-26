// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportStatisticalDataRequest extends $dara.Model {
  /**
   * @remarks
   * The start of the query time range. The value must be a Unix timestamp in milliseconds.
   * 
   * @example
   * 1582266750353
   */
  beginTimeLeftRange?: number;
  /**
   * @remarks
   * The end of the query time range. The value must be a Unix timestamp in milliseconds.
   * 
   * @example
   * 1582266750353
   */
  beginTimeRightRange?: number;
  /**
   * @remarks
   * The export type.
   * 
   * This parameter is required.
   * 
   * @example
   * statistical
   */
  exportType?: string;
  /**
   * @remarks
   * The ID of the Voice Navigator instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 29b52d70-d9fe-4fe0-8476-8aaacbcfdc84
   */
  instanceId?: string;
  /**
   * @remarks
   * The time unit.
   * 
   * This parameter is required.
   * 
   * @example
   * Hour
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
      exportType: 'ExportType',
      instanceId: 'InstanceId',
      timeUnit: 'TimeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
      exportType: 'string',
      instanceId: 'string',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


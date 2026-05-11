// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportStatisticalDataRequest extends $dara.Model {
  /**
   * @example
   * 1582266750353
   */
  beginTimeLeftRange?: number;
  /**
   * @example
   * 1582266750353
   */
  beginTimeRightRange?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * statistical
   */
  exportType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 29b52d70-d9fe-4fe0-8476-8aaacbcfdc84
   */
  instanceId?: string;
  /**
   * @remarks
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAsyncTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The trial data ID.
   * 
   * @example
   * 1231
   */
  dataId?: number;
  /**
   * @remarks
   * Specifies whether to validate the request parameters without performing the actual operation. Default value: false.
   * 
   * Valid values:
   * 
   * - **true**
   * 
   * - **false**.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The service type.
   * 
   * - document-analyze.
   * 
   * @example
   * document-analyze
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'dataId',
      dryRun: 'dryRun',
      serviceType: 'serviceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'number',
      dryRun: 'boolean',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


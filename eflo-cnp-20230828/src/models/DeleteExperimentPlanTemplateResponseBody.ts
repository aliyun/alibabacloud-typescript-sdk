// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExperimentPlanTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data
   * 
   * @example
   * []
   */
  data?: boolean;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 4D3FD55F-3BCD-5914-9B74-A1F4961327E7
   */
  requestId?: string;
  /**
   * @remarks
   * Total Count
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


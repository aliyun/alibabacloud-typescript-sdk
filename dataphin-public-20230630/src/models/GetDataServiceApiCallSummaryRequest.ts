// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataServiceApiCallSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-06-30 20:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 102102
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      opTenantId: 'number',
      projectId: 'number',
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


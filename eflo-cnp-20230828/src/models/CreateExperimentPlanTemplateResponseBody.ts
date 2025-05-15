// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateExperimentPlanTemplateResponseBodyData } from "./CreateExperimentPlanTemplateResponseBodyData";


export class CreateExperimentPlanTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access Denied Detail
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Data
   */
  data?: CreateExperimentPlanTemplateResponseBodyData;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 5514CB39-B7C0-5B89-8534-2DE1E0F2B7AB
   */
  requestId?: string;
  /**
   * @remarks
   * total
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: CreateExperimentPlanTemplateResponseBodyData,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreviewGtmRecoveryPlanResponseBodyPreviews } from "./PreviewGtmRecoveryPlanResponseBodyPreviews";


export class PreviewGtmRecoveryPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The returned preview information of the disaster recovery plan.
   */
  previews?: PreviewGtmRecoveryPlanResponseBodyPreviews;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 853805EA-3D47-47D5-9A1A-A45C24313ABD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned on all pages.
   * 
   * @example
   * 15
   */
  totalItems?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 3
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      previews: 'Previews',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      previews: PreviewGtmRecoveryPlanResponseBodyPreviews,
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.previews && typeof (this.previews as any).validate === 'function') {
      (this.previews as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


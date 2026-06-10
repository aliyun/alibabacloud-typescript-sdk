// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeConcurrencyReportRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * 85bf7efa-a07c-498a-850e-99a5849b8589
   */
  instanceId?: string;
  /**
   * @remarks
   * Task group ID
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetShutdownPolicyRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The customer UID.
   * 
   * This parameter is required.
   * 
   * @example
   * 292828565558721922
   */
  customerUID?: number;
  /**
   * @remarks
   * The start time. If left empty, data from the last six months is returned. The time format is yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-12-15 10:34:36
   */
  operationTime?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      customerUID: 'CustomerUID',
      operationTime: 'OperationTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerUID: 'number',
      operationTime: 'string',
      pageNo: 'number',
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


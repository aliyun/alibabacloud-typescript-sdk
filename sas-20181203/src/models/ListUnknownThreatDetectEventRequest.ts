// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUnknownThreatDetectEventRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 0a212417e65c26ff133cfff28f6c****
   */
  hashKey?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * /bin/bash
   */
  parentProcessPath?: string;
  /**
   * @example
   * /test
   */
  processPath?: string;
  /**
   * @example
   * 10.167.XX.XX
   */
  remark?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 18b7336e-d469-473b-af83-8e5420f9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hashKey: 'HashKey',
      pageSize: 'PageSize',
      parentProcessPath: 'ParentProcessPath',
      processPath: 'ProcessPath',
      remark: 'Remark',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hashKey: 'string',
      pageSize: 'number',
      parentProcessPath: 'string',
      processPath: 'string',
      remark: 'string',
      status: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


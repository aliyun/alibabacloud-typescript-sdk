// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactBlockListRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  countTotalRow?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 846e20ae-e113-4231-a792-cb354187c9f6
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      countTotalRow: 'CountTotalRow',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countTotalRow: 'boolean',
      instanceId: 'string',
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


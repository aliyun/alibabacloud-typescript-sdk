// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomScriptTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 0ec0c897-b92c-40e4-9ad7-e6e4f5ce13bb
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number for paging. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for paging. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
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


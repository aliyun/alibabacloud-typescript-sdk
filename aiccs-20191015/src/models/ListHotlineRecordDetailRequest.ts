// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotlineRecordDetailRequest extends $dara.Model {
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 1614582000000
   */
  closeTimeEnd?: number;
  /**
   * @example
   * 1614578400000
   */
  closeTimeStart?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      closeTimeEnd: 'CloseTimeEnd',
      closeTimeStart: 'CloseTimeStart',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      closeTimeEnd: 'number',
      closeTimeStart: 'number',
      currentPage: 'number',
      instanceId: 'string',
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


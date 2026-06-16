// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSimulationTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * @example
   * 3144
   */
  id?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * SIMULATION
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * 仿真任务
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      currentPage: 'currentPage',
      id: 'id',
      name: 'name',
      pageSize: 'pageSize',
      regId: 'regId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      currentPage: 'string',
      id: 'string',
      name: 'string',
      pageSize: 'string',
      regId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


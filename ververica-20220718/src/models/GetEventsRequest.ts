// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEventsRequest extends $dara.Model {
  /**
   * @example
   * 58718c99-3b29-4c5e-93bb-c9fc4ec6****
   */
  deploymentId?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'string',
      pageIndex: 'number',
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


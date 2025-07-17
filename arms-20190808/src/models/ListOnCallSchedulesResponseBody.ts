// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOnCallSchedulesResponseBodyPageBeanOnCallSchedules extends $dara.Model {
  /**
   * @remarks
   * The description of the scheduling policy.
   * 
   * @example
   * Test scheduling policy
   */
  description?: string;
  /**
   * @remarks
   * The ID of the scheduling policy.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The name of the scheduling policy.
   * 
   * @example
   * OnCallSchedule_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnCallSchedulesResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The information about the scheduling policy.
   */
  onCallSchedules?: ListOnCallSchedulesResponseBodyPageBeanOnCallSchedules[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      onCallSchedules: 'OnCallSchedules',
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onCallSchedules: { 'type': 'array', 'itemType': ListOnCallSchedulesResponseBodyPageBeanOnCallSchedules },
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.onCallSchedules)) {
      $dara.Model.validateArray(this.onCallSchedules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnCallSchedulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The objects that were returned.
   */
  pageBean?: ListOnCallSchedulesResponseBodyPageBean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 78901766-3806-4E96-8E47-CFEF59E4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: ListOnCallSchedulesResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


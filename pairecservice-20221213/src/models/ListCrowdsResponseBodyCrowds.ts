// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrowdsResponseBodyCrowds extends $dara.Model {
  /**
   * @example
   * 3
   */
  crowdId?: string;
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * os=android
   */
  label?: string;
  /**
   * @example
   * crowd1
   */
  name?: string;
  /**
   * @example
   * 10
   */
  quantity?: string;
  /**
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @example
   * user1,user2
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      crowdId: 'CrowdId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      label: 'Label',
      name: 'Name',
      quantity: 'Quantity',
      source: 'Source',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crowdId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      label: 'string',
      name: 'string',
      quantity: 'string',
      source: 'string',
      users: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrowdsResponseBodyCrowds extends $dara.Model {
  /**
   * @remarks
   * The Crowd ID.
   * 
   * @example
   * 3
   */
  crowdId?: string;
  /**
   * @remarks
   * The Crowd description.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The time when the Crowd was created.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The label of the Crowd.
   * 
   * @example
   * os=android
   */
  label?: string;
  /**
   * @remarks
   * The Crowd name.
   * 
   * @example
   * crowd1
   */
  name?: string;
  /**
   * @remarks
   * The number of users in the Crowd.
   * 
   * @example
   * 10
   */
  quantity?: string;
  /**
   * @remarks
   * The source of the Crowd. Valid values:
   * 
   * - `ManualInput`: The Crowd is created from a manual entry of users.
   * 
   * - `UploadFile`: The Crowd is created from an uploaded file.
   * 
   * @example
   * ManualInput
   */
  source?: string;
  /**
   * @remarks
   * The user IDs in the Crowd, separated by commas.
   * 
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

export class ListCrowdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Crowds.
   */
  crowds?: ListCrowdsResponseBodyCrowds[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9763624B-5FBB-5E3A-9193-B1ADB554CEAE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of Crowds.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      crowds: 'Crowds',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crowds: { 'type': 'array', 'itemType': ListCrowdsResponseBodyCrowds },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.crowds)) {
      $dara.Model.validateArray(this.crowds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


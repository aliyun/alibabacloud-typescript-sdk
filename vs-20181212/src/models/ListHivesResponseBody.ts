// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHivesResponseBodyHives extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-05-14T15:20:37+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Basic S1
   */
  description?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * hive-3b506f0868a7451ba15e0e890706033a
   */
  hiveId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * yy-test2
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      hiveId: 'HiveId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      hiveId: 'string',
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

export class ListHivesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of clusters.
   */
  hives?: ListHivesResponseBodyHives[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxx-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hives: 'Hives',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hives: { 'type': 'array', 'itemType': ListHivesResponseBodyHives },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hives)) {
      $dara.Model.validateArray(this.hives);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


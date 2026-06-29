// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRoutinesResponseBodyRoutines extends $dara.Model {
  /**
   * @remarks
   * The time when the Edge Routine was created. The time follows the RFC 3339 standard in the UTC time zone.
   * 
   * @example
   * 2024-03-11T01:23:02.883361712Z
   */
  createTime?: string;
  /**
   * @remarks
   * The default access record associated with the Routine.
   * 
   * @example
   * serverless-test-2.154edaf6.er.aliyun-esa.net
   */
  defaultRelatedRecord?: string;
  /**
   * @remarks
   * The Routine description.
   * 
   * @example
   * ZWRpdCByb3V0aW5lIGNvbmZpZyBkZXNjcmlwdGlvbg==
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the Routine contains asset files.
   * 
   * @example
   * false
   */
  hasAssets?: boolean;
  /**
   * @remarks
   * The Routine name.
   * 
   * @example
   * hello
   */
  routineName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultRelatedRecord: 'DefaultRelatedRecord',
      description: 'Description',
      hasAssets: 'HasAssets',
      routineName: 'RoutineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultRelatedRecord: 'string',
      description: 'string',
      hasAssets: 'boolean',
      routineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserRoutinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The Routine quota for the current plan.
   * 
   * @example
   * 20
   */
  quotaRoutineNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1234567890ABCDEF
   */
  requestId?: string;
  /**
   * @remarks
   * The list of Routines.
   */
  routines?: ListUserRoutinesResponseBodyRoutines[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of Routines already created.
   * 
   * @example
   * 5
   */
  usedRoutineNumber?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      quotaRoutineNumber: 'QuotaRoutineNumber',
      requestId: 'RequestId',
      routines: 'Routines',
      totalCount: 'TotalCount',
      usedRoutineNumber: 'UsedRoutineNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      quotaRoutineNumber: 'number',
      requestId: 'string',
      routines: { 'type': 'array', 'itemType': ListUserRoutinesResponseBodyRoutines },
      totalCount: 'number',
      usedRoutineNumber: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.routines)) {
      $dara.Model.validateArray(this.routines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserRoutinesResponseBodyRoutines extends $dara.Model {
  createTime?: string;
  defaultRelatedRecord?: string;
  description?: string;
  hasAssets?: boolean;
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
  pageNumber?: number;
  pageSize?: number;
  quotaRoutineNumber?: number;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  routines?: ListUserRoutinesResponseBodyRoutines[];
  totalCount?: number;
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


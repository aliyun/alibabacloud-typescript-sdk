// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DistApplicationDataResponseBodyDistInstanceIds } from "./DistApplicationDataResponseBodyDistInstanceIds";
import { DistApplicationDataResponseBodyDistResults } from "./DistApplicationDataResponseBodyDistResults";


export class DistApplicationDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of ENS instance IDs.
   */
  distInstanceIds?: DistApplicationDataResponseBodyDistInstanceIds;
  /**
   * @remarks
   * The total number of ENS instance IDs.
   * 
   * @example
   * 2
   */
  distInstanceTotalCount?: number;
  /**
   * @remarks
   * The distribution result of the data file.
   */
  distResults?: DistApplicationDataResponseBodyDistResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      distInstanceIds: 'DistInstanceIds',
      distInstanceTotalCount: 'DistInstanceTotalCount',
      distResults: 'DistResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distInstanceIds: DistApplicationDataResponseBodyDistInstanceIds,
      distInstanceTotalCount: 'number',
      distResults: DistApplicationDataResponseBodyDistResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.distInstanceIds && typeof (this.distInstanceIds as any).validate === 'function') {
      (this.distInstanceIds as any).validate();
    }
    if(this.distResults && typeof (this.distResults as any).validate === 'function') {
      (this.distResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


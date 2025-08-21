// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DistApplicationDataResponseBodyDistInstanceIds extends $dara.Model {
  distInstanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      distInstanceId: 'DistInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distInstanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.distInstanceId)) {
      $dara.Model.validateArray(this.distInstanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistApplicationDataResponseBodyDistResultsDistResult extends $dara.Model {
  /**
   * @remarks
   * The name of the data file.
   * 
   * @example
   * gcs-prod-websocket-eip-unicom
   */
  name?: string;
  /**
   * @remarks
   * The error code. The value is of the enumerated data type.
   * 
   * @example
   * 400
   */
  resultCode?: number;
  /**
   * @remarks
   * The description of the distribution result.
   * 
   * @example
   * Success
   */
  resultDescrip?: string;
  /**
   * @remarks
   * The version number of the data file.
   * 
   * @example
   * standard
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      resultCode: 'ResultCode',
      resultDescrip: 'ResultDescrip',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resultCode: 'number',
      resultDescrip: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistApplicationDataResponseBodyDistResults extends $dara.Model {
  distResult?: DistApplicationDataResponseBodyDistResultsDistResult[];
  static names(): { [key: string]: string } {
    return {
      distResult: 'DistResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distResult: { 'type': 'array', 'itemType': DistApplicationDataResponseBodyDistResultsDistResult },
    };
  }

  validate() {
    if(Array.isArray(this.distResult)) {
      $dara.Model.validateArray(this.distResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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


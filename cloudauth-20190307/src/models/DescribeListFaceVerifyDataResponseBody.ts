// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeListFaceVerifyDataResponseBodyMonitorDataFaceVerifyData extends $dara.Model {
  /**
   * @remarks
   * The authentication statistics time.
   * 
   * @example
   * 2025-10-16T00:00:00.000Z
   */
  conDate?: string;
  /**
   * @remarks
   * The number of authentication-failed transactions.
   * 
   * @example
   * 6
   */
  failCnt?: string;
  /**
   * @remarks
   * The authentication solution.
   * 
   * @example
   * Liveness
   */
  name?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 1000011644
   */
  sceneId?: string;
  /**
   * @remarks
   * The number of authentication-passed transactions.
   * 
   * @example
   * 12
   */
  succCnt?: string;
  /**
   * @remarks
   * The total number of authentication requests.
   * 
   * @example
   * 18
   */
  totalCnt?: string;
  static names(): { [key: string]: string } {
    return {
      conDate: 'ConDate',
      failCnt: 'FailCnt',
      name: 'Name',
      sceneId: 'SceneId',
      succCnt: 'SuccCnt',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conDate: 'string',
      failCnt: 'string',
      name: 'string',
      sceneId: 'string',
      succCnt: 'string',
      totalCnt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListFaceVerifyDataResponseBodyMonitorData extends $dara.Model {
  /**
   * @remarks
   * The facial recognition data.
   */
  faceVerifyData?: DescribeListFaceVerifyDataResponseBodyMonitorDataFaceVerifyData[];
  static names(): { [key: string]: string } {
    return {
      faceVerifyData: 'FaceVerifyData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceVerifyData: { 'type': 'array', 'itemType': DescribeListFaceVerifyDataResponseBodyMonitorDataFaceVerifyData },
    };
  }

  validate() {
    if(Array.isArray(this.faceVerifyData)) {
      $dara.Model.validateArray(this.faceVerifyData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeListFaceVerifyDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  monitorData?: DescribeListFaceVerifyDataResponseBodyMonitorData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EBD373EA-07FC-50BC-906F-B8950B6ED462
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorData: DescribeListFaceVerifyDataResponseBodyMonitorData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.monitorData && typeof (this.monitorData as any).validate === 'function') {
      (this.monitorData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


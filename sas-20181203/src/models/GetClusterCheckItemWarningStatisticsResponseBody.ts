// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterCheckItemWarningStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of high-risk items.
   * 
   * @example
   * 3
   */
  highWarningCount?: number;
  /**
   * @remarks
   * The number of low-risk items.
   * 
   * @example
   * 1
   */
  lowWarningCount?: number;
  /**
   * @remarks
   * The number of medium-risk items.
   * 
   * @example
   * 2
   */
  mediumWarningCount?: number;
  static names(): { [key: string]: string } {
    return {
      highWarningCount: 'HighWarningCount',
      lowWarningCount: 'LowWarningCount',
      mediumWarningCount: 'MediumWarningCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highWarningCount: 'number',
      lowWarningCount: 'number',
      mediumWarningCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterCheckItemWarningStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics on risk items by risk level.
   */
  data?: GetClusterCheckItemWarningStatisticsResponseBodyData;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C2B285A3-3493-5C5F-A224-4CCE4BFC****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetClusterCheckItemWarningStatisticsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


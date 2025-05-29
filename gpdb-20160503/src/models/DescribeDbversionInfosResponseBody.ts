// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBVersionInfosResponseBodyVersionDetails } from "./DescribeDbversionInfosResponseBodyVersionDetails";


export class DescribeDBVersionInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The queried minor versions.
   */
  versionDetails?: DescribeDBVersionInfosResponseBodyVersionDetails;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionDetails: 'VersionDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionDetails: DescribeDBVersionInfosResponseBodyVersionDetails,
    };
  }

  validate() {
    if(this.versionDetails && typeof (this.versionDetails as any).validate === 'function') {
      (this.versionDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


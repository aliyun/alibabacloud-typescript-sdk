// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataQualityAnalysisResponseBodyData } from "./GetDataQualityAnalysisResponseBodyData";


export class GetDataQualityAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetDataQualityAnalysisResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * 4A0AEC56-5C9A-5D47-93DF-7227836FFF82
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataQualityAnalysisResponseBodyData,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeChestVesselResponseBodyData } from "./AnalyzeChestVesselResponseBodyData";


export class AnalyzeChestVesselResponseBody extends $dara.Model {
  data?: AnalyzeChestVesselResponseBodyData;
  message?: string;
  /**
   * @example
   * B87D013B-F25F-47DC-ABE1-440F4837AFD2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AnalyzeChestVesselResponseBodyData,
      message: 'string',
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


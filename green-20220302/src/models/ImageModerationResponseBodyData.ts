// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageModerationResponseBodyDataExt } from "./ImageModerationResponseBodyDataExt";
import { ImageModerationResponseBodyDataResult } from "./ImageModerationResponseBodyDataResult";


export class ImageModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * >  If you specify the dataId parameter in the request, the value of the dataId parameter is returned in the response.
   * 
   * @example
   * fb5ffab1-993b-449f-b8d6-b97d5e3331f2
   */
  dataId?: string;
  /**
   * @remarks
   * Auxiliary reference information.
   */
  ext?: ImageModerationResponseBodyDataExt;
  manualTaskId?: string;
  /**
   * @remarks
   * The results of image moderation parameters such as the label parameter and the confidence parameter, which are an array structure.
   */
  result?: ImageModerationResponseBodyDataResult[];
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      ext: 'Ext',
      manualTaskId: 'ManualTaskId',
      result: 'Result',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      ext: ImageModerationResponseBodyDataExt,
      manualTaskId: 'string',
      result: { 'type': 'array', 'itemType': ImageModerationResponseBodyDataResult },
      riskLevel: 'string',
    };
  }

  validate() {
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


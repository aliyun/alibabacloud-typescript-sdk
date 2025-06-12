// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VoiceModerationResultResponseBodyDataSliceDetails } from "./VoiceModerationResultResponseBodyDataSliceDetails";


export class VoiceModerationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The unique ID of the live stream.
   * 
   * @example
   * liveId
   */
  liveId?: string;
  manualTaskId?: string;
  /**
   * @remarks
   * Risk Level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The moderation results of audio segments.
   */
  sliceDetails?: VoiceModerationResultResponseBodyDataSliceDetails[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * kw24ihd0WGkdi5nniVZM@qOj-1x5Ibb
   */
  taskId?: string;
  /**
   * @remarks
   * The URL of the moderated content.
   * 
   * @example
   * https://aliyundoc.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      liveId: 'LiveId',
      manualTaskId: 'ManualTaskId',
      riskLevel: 'RiskLevel',
      sliceDetails: 'SliceDetails',
      taskId: 'TaskId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      liveId: 'string',
      manualTaskId: 'string',
      riskLevel: 'string',
      sliceDetails: { 'type': 'array', 'itemType': VoiceModerationResultResponseBodyDataSliceDetails },
      taskId: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sliceDetails)) {
      $dara.Model.validateArray(this.sliceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


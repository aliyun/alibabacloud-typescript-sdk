// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentVoiceprintsResponseBodyVoiceprints extends $dara.Model {
  /**
   * @remarks
   * The creation time of the voiceprint.
   * 
   * @example
   * 2025-07-28T10:03:58.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time of the voiceprint.
   * 
   * @example
   * 2025-07-28T10:03:58.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique identifier for the voiceprint.
   * 
   * @example
   * vp_1699123456_8527
   */
  voiceprintId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      voiceprintId: 'VoiceprintId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      voiceprintId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAIAgentVoiceprintsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of voiceprints that match the query criteria.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The voiceprints.
   */
  voiceprints?: ListAIAgentVoiceprintsResponseBodyVoiceprints[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      voiceprints: 'Voiceprints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      voiceprints: { 'type': 'array', 'itemType': ListAIAgentVoiceprintsResponseBodyVoiceprints },
    };
  }

  validate() {
    if(Array.isArray(this.voiceprints)) {
      $dara.Model.validateArray(this.voiceprints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

